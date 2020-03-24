import React, {Component} from "react";
import './detailedInfoPage.css';
//import array of data from .json file as a "info" array
import info from './detailedInfoPage.json';
// importing carousel and styles for it
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
//importing components
import Header from "../header/header";


export default class DetailedInfoPage extends Component {
    render() {

        const { id } = this.props;
        // importing all images
        let importAll = ( r ) => {
            return r.keys().map(r);
        };
        const images = importAll(require.context('../media/imgs/products', true, /\.(png|PNG|jpe?g|jpg)$/ ));

        let getImages = ( item ) => {
            for ( let i = 0; i < images.length; i++ ){
                if (images[i].indexOf(item) !== -1) {
                    return {
                        original: images[i]
                    }
                }
            }
        };

        const imagesArray = info[id].images.map( (item) => getImages( item ) ) ;


        console.log(imagesArray);

        return (
            <>
                <Header id={ info[id].headerID }/>
                <ImageGallery items={imagesArray} />
                <p>Hello World!</p>
                <p>{id}</p>
            </>
        )
    }
}
