import React, {Component} from "react";
import './detailedListPage.css';
import '../app/app.css';
//import components
import Header from "../header/header";
import { Container, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import linkBack from "../media/imgs/back.png";
import Footer from "../footer/footer";
// import data array from .json file
import data from "./detailedListPage.json";


export default class DetailedListPage extends Component {

    render() {

        const { active } = this.props;
        // function to import whole directory of files
        let importAll = ( r ) => {
            return r.keys().map(r);
        };
        const images = importAll(require.context('../media/imgs/products', true, /\.(png|PNG|jpe?g|jpg)$/ ));
        console.log(images);
        // I use a key variable because images sometimes repeat, and it cause the same key tag in Col component
        let key = 1;
        // get image url from .json and comparing with existed imgs throw url
        let getImages = ( item, id, dataId ) => {
            for ( let i = 0; i < images.length; i++ ){
                if (images[i].indexOf(item) !== -1) {
                    key++;
                    return <Col className="detailedListBlock" key={ key } md={12} lg={3}>
                        <Link to={ data[dataId].linksTo[id] }><img src={ images[i]  } alt=" "/></Link>
                        <p><Link to={ data[dataId].linksTo[id] }>{data[dataId].headers[id]}</Link></p>
                    </Col>
                }
            }
        };

        let result, headerId;
        // id in data array is depended from url and will be set manually
        switch ( active ) {
            case 'service-home': {
                headerId = 6;
                result = <Row className="justify-content-center">
                    { data[1].images.map( (item, id) => getImages(item, id, 1) )}
                 </Row>;
                break;
            }

            case 'service-flat': {
                headerId = 7;
                result = <Row className="justify-content-center">
                    { data[2].images.map( (item, id) => getImages(item, id, 2) )}
                 </Row>;
                break;
            }

            case 'works-home': {
                headerId = 8;
                result = <Row className="justify-content-center">
                    { data[3].images.map( (item, id) => getImages(item, id, 3) )}
                 </Row>;
                break;
            }

            case 'works-flat': {
                headerId = 9;
                result = <Row className="justify-content-center">
                    { data[4].images.map( (item, id) => getImages(item, id, 4) )}
                 </Row>;
                break;
            }

            case 'cermet-heaters': {
                headerId = 10;
                result = <Row className="justify-content-center">
                    { data[5].images.map( (item, id) => getImages(item, id, 5) )}
                 </Row>;
                break;
            }

            case 'kettles': {
                headerId = 11;
                result = <Row className="justify-content-center">
                    { data[6].images.map( (item, id) => getImages(item, id, 6) )}
                 </Row>;
                break;
            }

            case 'electric-radiators': {
                headerId = 12;
                result = <Row className="justify-content-center">
                    { data[7].images.map( (item, id) => getImages(item, id, 7) )}
                 </Row>;
                break;
            }

            default: {
                result = <div className="detailedListPageError">
                    <h3>Sorry, but we can't find information about it.</h3>
                    <h4>We will check this error immediately</h4>
                    <p>If you have any questions, write to:</p>
                </div>
            }
        }

        return (
            <>

                <Header id={headerId||999}/>

                <div className="linkBack">
                    <Col sm={2}>
                        <Link to="/">
                            <img src={linkBack} alt="Link back"/>
                            <p>назад</p>
                        </Link>
                    </Col>
                </div>

                <Container fluid={true} className="block">
                    { result }
                </Container>

                <Footer header={'Как начать греться? - '} redHeader={'Напишите нам!'}/>
            </>
        )
    }

}