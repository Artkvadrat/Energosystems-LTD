import React, {Component} from "react";
import './contacts.css';
//import components
import Header from "../header/header";
import {Col, Container, Row} from "react-bootstrap";
//import images
import linkBack from '../img/back.png';
import geoPosition from '../img/maps-and-flags.png';
import phone from '../img/call-answer-red.png';
import mail from '../img/mail.png';
import instagram from '../img/instagram.png';
import telegram from '../img/telegram.png';
import Footer from "../footer/footer";


export default class Contacts extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="linkBack">
                    <a href="#">
                        <img src={linkBack} alt="Link back"/>
                        <p>назад</p>
                    </a>
                </div>
                <Container fluid={true} className='block'>
                    <Row>
                        <Col lg={1} md={0}>
                        </Col>
                        <Col lg={3} md={12} className="contactsItem">
                            <a target="_blank"
                               rel="noopener noreferrer"
                               href="https://www.google.com.ua/maps/place/%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9+%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%C2%AB%D0%97%D0%BE%D1%80%D1%8F%D0%BD%D0%B8%D0%B9%C2%BB/@48.6410649,35.2590022,18z/data=!4m5!3m4!1s0x40d9451da77ec257:0x329c2901258ca100!8m2!3d48.640653!4d35.2591556?hl=en&authuser=0">
                                <img src={geoPosition} alt="Geo position"/>
                                <p>г. Новомосковск, ул. Гетманская 41Б, 51200</p>
                            </a>
                        </Col>
                        <Col lg={3} md={12} className="contactsItem">
                            <a href="tel:+380980325902">
                                <img src={phone} alt="Phone"/>
                                <p>+380(98)-032-59-02</p>
                            </a>
                            <a href="tel:+380662338009">
                                <img src={phone} alt="Phone"/>
                                <p>+380(66)-233-80-09</p>
                            </a>
                            <a href="tel:+380680684040">
                                <img src={phone} alt="Phone"/>
                                <p>+380(68)-068-40-40</p>
                            </a>
                        </Col>
                        <Col lg={3} md={12} className="contactsItem">
                             <a href="">
                                <img src={mail} alt="Phone"/>
                                <p>example.info@gmail.com</p>
                            </a>
                            <a href="">
                                <img src={mail} alt="Phone"/>
                                <p>example.info@gmail.com</p>
                            </a>
                        </Col>
                        <Col lg={1} md={12} className='socialLinks'>
                            <a href="">
                                <img src={telegram} alt="Telegram"/>
                            </a>
                            <a href="">
                                <img src={instagram} alt="Instagram"/>
                            </a>
                        </Col>
                    </Row>
                    <p className="header"><span className='red'>Мы</span> на карте</p>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.460126023643!2d35.26000228158928!3d48.6417153602748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9451da77ec257%3A0x329c2901258ca100!2z0KLQvtGA0LPQvtCy0YvQuSDQptC10L3RgtGAIMKr0JfQvtGA0Y_QvdC40LnCuw!5e0!3m2!1sen!2sua!4v1583266469404!5m2!1sen!2sua"
                                frameBorder="0" style={{border:0}}
                                title="map"> </iframe>
                    </div>
                </Container>
                <Footer header={'Как уже начать грется? - '} redHeader={'Напишите нам!'}/>
            </>
        )
    }
}