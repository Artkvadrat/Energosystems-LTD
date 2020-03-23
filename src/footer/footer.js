import React, {Component} from "react";
import './footer.css';
// import components
import emailjs from 'emailjs-com'
import {Col, Container, Row} from "react-bootstrap";
import Modal from "react-modal";
//importing images
import phone from '../media/imgs/call-answer-red.png';
import mail from '../media/imgs/mail.png';
import geo from '../media/imgs/maps-and-flags.png';
import instagram from '../media/imgs/instagram.png';
import telegram from '../media/imgs/telegram.png';


const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        border: '1px solid #d97000',
        color: 'd97000'
    }
};

export default class Footer extends Component {

    state = {
        show: false
    };

    openModal = () => {
        this.setState({show: true})
    };

    closeModal = () => {
        this.setState({show: false});

    };

    sendEmail = (e) => {
        e.preventDefault();

        let currentUrl = window.location.href;
        e.target.message.value += `\n Отправлено с старницы ${currentUrl}`;

        emailjs.sendForm("test", "template_zXMoe4Jj", e.target, "user_hU6rV9k4GGsqkLdd1nLrY")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        this.openModal();

        e.target.contact_name.value = '';
        e.target.user_phone.value = '';
        e.target.user_email.value = '';
        e.target.message.value = '';

    };

    render() {

        const { show } = this.state;
        const { header, redHeader } = this.props;

        return (
            <>
            <Container>
                <p className="header">{header}<span className='red'>{redHeader}</span></p>
                <Row className="justify-content-center" style={{ marginBottom: '100px'}}>
                    <Col lg={6} md={12}>
                        <form onSubmit={this.sendEmail}>
                            <input placeholder="Ваше имя"
                                   id="nameInput"
                                   type="name"
                                   name="contact_name"
                                   required
                                   minLength={2}
                                   maxLength={20}/>
                            <div className="secondLineOfForm">
                                <input placeholder="Ваш телефон"
                                       id="phoneInput"
                                       type="phone"
                                       name="user_phone"
                                       required
                                       minLength={8}
                                       maxLength={13}/>
                                <input placeholder="Ваш E-mail"
                                       id="emailInput"
                                       type="email"
                                       name="user_email"
                                       required
                                       minLength={5}
                                       maxLength={30}/>
                            </div>
                            <textarea placeholder="Ваш вопрос"
                                      id="messageInput"
                                      rows="5"
                                      cols="35"
                                      name="message"
                                      required
                                      minLength={5}
                                      maxLength={100}/>
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
                                <a href="https://www.google.com.ua/maps/place/Dorozhnaya+St,+Novomoskovsk,+Dnipropetrovs'ka+oblast,+51200/@48.6408614,35.2568383,17z/data=!3m1!4b1!4m5!3m4!1s0x40d9451d755cef05:0xd998bab0f67aa060!8m2!3d48.6408608!4d35.2587185?hl=en&authuser=0email" className='d-flex footerContactItem'>
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
            <Modal isOpen={show}
                   onRequestClose={this.closeModal}
                   style={customStyles}>
                <h3>Сообщение отправлено!</h3>
                <p>Мы с Вами свяжемся в течении 15 минут и ответим на все Ваши вопросы</p>
                <p>(при условии что рабочий день не закончен)</p>
            </Modal>
            </>
        )

    }

}