import React, {Component} from "react";
import './istPage.css';
// importing components
import Header from "../header/header";
import Footer from "../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
import { Link }  from "react-router-dom";
//importing images
import linkBack from "../media/imgs/back.png";
// importing data from .json file
import data from './listPage.json';

export default class ListPage extends Component {

    render() {

        // function to import whole directory of files
        let importAll = ( r ) => {
            return r.keys().map(r);
        };
        const images = importAll(require.context('../media/imgs/products', false, /\.(png|jpe?g)$/ ));
        // get image url from .json and comparing with existed imgs throw url

        let getImages = ( item, id, linkTo, dataId ) => {
            for ( let i = 0; i < images.length; i++ ){
                if (images[i].indexOf(item) !== -1) {
                    return <Col className="detailedListBlock" key={i} md={12} lg={3}>
                        <Link to={ linkTo }><img src={ images[i]  } alt=" " /></Link>
                        <p><Link to={ linkTo }>{data[dataId].headers[id]}</Link></p>
                    </Col>
                }
            }
        };

        function findActiveWindow() {
            let currentUrl = window.location.href;
            let activeWindow = /(services|works|production)/.exec(currentUrl);
            return ( activeWindow || '');
        }


        let result, headerId;
        // id in data array is depended from url and will be set manually
        switch (findActiveWindow()[0]) {
            case 'services': {
                headerId = 3;
                result = <Row className="justify-content-center">
                    { data[1].images.map( (item, id) => getImages(item, id, '/contact-us', 1) )}
                 </Row>;
                break;
            }
            case 'works': {
                headerId = 4;
                result = <Row className="justify-content-center">
                    { data[2].images.map( (item, id) => getImages(item, id, '/contact-us', 2) )}
                 </Row>;
                break;
            }
            case 'production': {
                headerId = 5;
                result = <Row className="justify-content-center">
                    { data[3].images.map( (item, id) => getImages(item, id, '/contact-us', 3) )}
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
                {/*headerId is set up in switch*/}
                <Header id={headerId||999}/>

                <div className="linkBack">
                    <Col sm={2}>
                        <Link to="/">
                            <img src={linkBack} alt="Link back"/>
                            <p>назад</p>
                        </Link>
                    </Col>
                </div>
                <Container fluid={true} className='block'>

                    {result}

                </Container>

                <Footer header={'Как оформить заказ? - '} redHeader={'Напишите нам!'}/>

                </>
        )
    }
}