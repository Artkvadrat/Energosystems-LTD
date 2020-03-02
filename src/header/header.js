import React, {Component} from "react";
import './header.css';
//importing components
import {Col, Container, Row} from "react-bootstrap";
//importing images
import backgroundImage from '../img/dwarfs-black.png';
import logo from '../img/logo white.png';
import "./../img/call-answer-white.png";

const setBackground = {
    background: `url(${backgroundImage}) 100% no-repeat`
};

export default class Header extends Component {
    render() {
        return (
            <Container className="headerBlock"
                       fluid={true}
                       style={ setBackground }>
                <Row>
                    <Col sm={0} md={1}>

                    </Col>
                    <Col md={10} className="d-flex justify-content-between">
                        <div className="logo d-flex">
                            <img src={logo} alt="Logo"/>
                            <p>Energo Systems LTD</p>
                        </div>
                        <div className="d-flex">
                            <div className="phones">
                                <p className="phoneNumber">
                                    <a href="tel:+380980325902">
                                        +380(98)-032-59-02
                                    </a>
                                </p>
                                <p className="phoneNumber">
                                    <a href="tel:+380662338009">
                                        +380(66)-233-80-09
                                    </a>
                                </p>
                                <p className="phoneNumber">
                                    <a href="tel:+380680684040">
                                        +380(68)-068-40-40
                                    </a>
                                </p>
                            </div>
                            <div className="callBack">
                                <button>
                                    Обратная связь
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col md={1} sm={0}>

                    </Col>
                </Row>
                <Row>
                    <Col md={1} sm={0}>

                    </Col>
                    <Col md={10} sm={12} className="headerLinks">
                        <ul className="headerLinksList">
                            <li>
                                <a href="">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Работы
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Продукция
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Галерея робот
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    О компании
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={1} sm={0}>

                    </Col>
                </Row>
                <div className="infoAboutPage">
                    <p style={{color: 'white', fontSize: '30px', marginTop: '40px'}}>Мы не просто устанавливаем отопление</p>
                    <p style={{color: '#f13333', fontSize: '60px', marginTop: '40px', letterSpacing: '3px', paddingBottom: '50px'}}>Мы создаем комфорт</p>
                </div>
            </Container>
        )
    }
};

