import React, {Component} from "react";
import './header.css';
//importing components
import {Col, Container, Row} from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
//import array "Headers" of headers and links from file
import headers from './headers';
//importing images
import menu from '../media/imgs/menu.png';
import cross from '../media/imgs/cancel.png';
import backgroundImage from '../media/imgs/dwarfs-black.png';
import logo from '../media/imgs/logo white.png';
import "../media/imgs/call-answer-white.png";
import {Helmet} from "react-helmet";
import CallbackModalWindow from "../modalWindows/callbackModalWindow";


const setBackground = {
    background: `url(${backgroundImage}) 100% no-repeat`
};

export default class Header extends Component {
    render() {

        const { id } = this.props;

        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`${headers[id].title}`}</title>
                    <meta name="description" content=""/>
                    <meta name="keywords" content="Energosystems LTD Электроотопление Новомосковск Контакты"/>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>

                <Container className="headerBlock block"
                           fluid={true}
                           style={ setBackground }>
                    <Row>
                        <Col lg={1} ms={0}>

                        </Col>
                        <Col lg={10} md={12} className="d-flex justify-content-between">
                            <div className="logo d-flex">
                                <Link to="/">
                                    <img src={logo} alt="Logo"/>
                                    <p>Energo Systems LTD</p>
                                </Link>
                            </div>
                            <div className='d-flex'>
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
                                    <CallbackModalWindow/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={1} md={0}>

                        </Col>
                        <Col lg={10} md={12}>
                            <div>
                                <ul className="headerLinksList">
                                    <li>
                                        <Link to="/services">
                                            Услуги
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/works">
                                            Работы
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/production">
                                            Продукция
                                        </Link>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a href="">*/}
                                    {/*        Галерея робот*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li>
                                        <Link to="/about-company">
                                            О компании
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <div className="infoAboutPage">
                        <div dangerouslySetInnerHTML={ { __html: headers[id].firstLine } }/>
                        <div dangerouslySetInnerHTML={ { __html: headers[id].secondLine } }/>
                        {/*<p style={{color: '#d97000', fontSize: '70px', marginTop: '70px', letterSpacing: '3px', fontWeight: 700}}>{headers[1].firstLine}</p>*/}
                        {/*<p style={{color: 'white', fontSize: '40px', marginTop: '40px', paddingBottom: '90px'}}>а не просто устанавливаем отопление</p>*/}
                    </div>
                </Container>
                <Container className="burgerMenuBlock" fluid={true}>
                    <Menu width={250}
                          customBurgerIcon={<img src={ menu } alt="Open menu" />}
                          customCrossIcon={<img src={ cross } alt="Close menu" />}>
                        <Link to="/services">
                            Услуги
                        </Link>
                        <Link to="/works">
                            Работы
                        </Link>
                        <Link to="/production">
                            Продукция
                        </Link>
                        {/*<a href="">*/}
                        {/*    Галерея робот*/}
                        {/*</a>*/}
                        <Link to="/about-company">
                            О компании
                        </Link>
                        <Link to="/contact-us">
                            Контакты
                        </Link>
                    </Menu>
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        {/*<p>Energo Systems LTD</p>*/}
                </div>
                </Container>
            </>
        )
    }
};

