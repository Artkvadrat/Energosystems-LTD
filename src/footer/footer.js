import React, {Component} from "react";
import './footer.css';
import {Col, Container, Row} from "react-bootstrap";
//importing images
import phone from '../img/call-answer-red.png';
import mail from '../img/mail.png';
import geo from '../img/maps-and-flags.png';
import instagram from '../img/instagram.png';
import telegram from '../img/telegram.png';

export default class Footer extends Component {

    render() {

        const { header, redHeader } = this.props;

        return (
            <Container>
                <p className="header">{header}<span className='red'>{redHeader}</span></p>
                <Row className="justify-content-center" style={{ marginBottom: '100px'}}>
                    <Col lg={6} md={12}>
                        <form onSubmit={this.sendEmail}>
                            <input placeholder="Ваше имя"
                                   id="nameInput"
                                   type="name"
                                   name="contact_name"/>
                            <div className="secondLineOfForm">
                                <input placeholder="Ваш телефон"
                                       id="phoneInput"
                                       type="phone"
                                       name="user_phone"/>
                                <input placeholder="Ваш E-mail"
                                       id="emailInput"
                                       type="email"
                                       name="user_email"/>
                            </div>
                            <textarea placeholder="Ваш вопрос"
                                      id="messageInput"
                                      maxLength="300"
                                      rows="5"
                                      cols="35"
                                      name="message"/>
                            <input type="submit"
                                   value="Оправить"
                                   className="submitForm"/>
                        </form>
                    </Col>
                    <Col lg={6} md={12} className="footerContactsBlock">
                        <div className='footerContacts d-flex'>
                            <div className='d-flex footerContactLine'>
                                <a href="tel:380980325902" className='d-flex footerContactItem'>
                                    <img src={phone} alt="Phone"/>
                                    <p>+380(98)-032-59-02</p>
                                </a>
                                <a href="tel:380662338009" className='d-flex footerContactItem'>
                                    <img src={phone} alt="Phone"/>
                                    <p>+380(66)-233-80-09</p>
                                </a>
                                <a href="tel:380680684040" className='d-flex footerContactItem'>
                                    <img src={phone} alt="Phone"/>
                                    <p>+380(68)-068-40-40</p>
                                </a>
                            </div>
                            <div className='d-flex footerContactLine'>
                                <a href="mailto:example.info@gmail.com" className='d-flex footerContactItem'>
                                    <img src={mail} alt="Email"/>
                                    <p>example.info@gmail.com</p>
                                </a>
                                <a href="mailto:example.info@gmail.com" className='d-flex footerContactItem'>
                                    <img src={mail} alt="Email"/>
                                    <p>example.info@gmail.com</p>
                                </a>
                                <a href="" className='d-flex footerContactItem'>
                                    <img src={geo} alt="Geo position"/>
                                    <p>г. Новомосковск, <br/>ул. Гетманская 40, 51200</p>
                                </a>
                            </div>
                            <div className='d-flex footerContactLineImg'>
                                <img src={instagram} alt="Instagram"/>
                                <img src={telegram} alt="Telegram"/>
                            </div>
                        </div>
                        <div className="footerMap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.460126023643!2d35.26000228158928!3d48.6417153602748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d9451da77ec257%3A0x329c2901258ca100!2z0KLQvtGA0LPQvtCy0YvQuSDQptC10L3RgtGAIMKr0JfQvtGA0Y_QvdC40LnCuw!5e0!3m2!1sen!2sua!4v1583266469404!5m2!1sen!2sua"
                                    frameBorder="0" style={{border:0}}
                                    title="map"> </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        )

    }

}