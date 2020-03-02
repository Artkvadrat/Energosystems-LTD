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
                    <Col md={12} className="d-flex justify-content-between">
                        <div className="logo d-flex">
                            <img src={logo} alt="Logo"/>
                            <p>Energo Systems LTD</p>
                        </div>
                        <div>
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
                        </div>
                        {/*<div>*/}
                        {/*    <div className="phones">*/}
                        {/*        <p className="phoneNumber">*/}
                        {/*            <a href="tel:+380980325902">*/}
                        {/*                +380(98)-032-59-02*/}
                        {/*            </a>*/}
                        {/*        </p>*/}
                        {/*        <p className="phoneNumber">*/}
                        {/*            <a href="tel:+380662338009">*/}
                        {/*                +380(66)-233-80-09*/}
                        {/*            </a>*/}
                        {/*        </p>*/}
                        {/*        <p className="phoneNumber">*/}
                        {/*            <a href="tel:+380680684040">*/}
                        {/*                +380(68)-068-40-40*/}
                        {/*            </a>*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                            <div className="callBack">
                                <button>
                                    Обратная связь
                                </button>
                            </div>
                        {/*</div>*/}
                    </Col>
                </Row>

                <div className="infoAboutPage">
                    <p style={{color: 'white', fontSize: '70px', marginTop: '70px', letterSpacing: '3px'}}>МЫ СОЗДАЕМ КОМФОРТ</p>
                    <p style={{color: 'white', fontSize: '40px', marginTop: '40px', paddingBottom: '90px'}}>а не просто устанавливаем отопление</p>
                </div>
                <Row>
                    <Col md={1} sm={0}>

                    </Col>
                    <Col md={10} sm={12} className="headerLinks">

                    </Col>
                    <Col md={1} sm={0}>

                    </Col>
                </Row>
            </Container>
        )
    }
};

