import React, {Component} from "react";
import './aboutCompany.css';
//import components
import Header from "../header/header";
import linkBack from "../media/imgs/back.png";
import Footer from "../footer/footer";
import {Col, Container, Row} from "react-bootstrap";
//import images
import aboutFirst from '../media/imgs/company.jpg';
import aboutSecond from '../media/imgs/conferension.jpg';
import aboutThird from '../media/imgs/delivery.jpg';
import {Link} from "react-router-dom";

export default class AboutCompany extends Component {

    render() {
        return (
            <>
                <Header id={2}/>

                <div className="linkBack">
                    <Col sm={2}>
                        <Link to="/">
                            <img src={linkBack} alt="Link back"/>
                            <p>назад</p>
                        </Link>
                    </Col>
                </div>

                <Container fluid={true} className='block'>
                    <Row className="aboutCompanyLine justify-content-center">
                        <Col md={12} lg={5} className="aboutCompanyImg">
                            <img src={aboutFirst} alt="О компании"/>
                        </Col>
                        <Col md={12} lg={5}>
                            <p className="backgroundNumber">01</p>
                            <p className="aboutCompanyInfo">Наше предприятие существует с 2014 года как ООО "Никополь-Сервис"  основное направление, которого было выполнение услуг в области электрического отопление. Получив колоссальный опыт и знание в сфере энергетики, наша компания в 2018 году приняла решение о ре-брендинге, получив новое название - ООО "Энерго-Системы ЛТД" одной из сфер деятельности которой, стало направление возобновляемых источников энергии (ВИЭ).</p>
                            <p className="aboutCompanyInfo">Эффективное использование инновационных технологий и современный подход к бизнесу являются основой успеха и стратегического дальнейшего  развития ООО "Энерго-Системы ЛТД".</p>
                        </Col>
                    </Row>
                    <Row className="aboutCompanyLine justify-content-center secondLineAbout">
                        <Col md={12} lg={5} className="aboutCompanyImg">
                            <img src={aboutSecond} alt="О компании"/>
                        </Col>
                        <Col md={12} lg={5}>
                            <p className="backgroundNumber">02</p>
                            <p className="aboutCompanyInfo">Наша компания является активным участником семинаров, международных выставок, профессиональных конференций и круглых столов по энергогенерирующим, энергосберигающим технологиям и альтернативной энергетике.</p>
                            <p className="aboutCompanyInfo">Специалисты компании тщательно изучают передовые технологии энергосбережения. В производство запускаются только проверенные временем, сертифицированные и надежные технические разработки и оборудование.</p>
                        </Col>
                    </Row>
                    <Row className="aboutCompanyLine justify-content-center">
                        <Col md={12} lg={5}  className="aboutCompanyImg">
                            <img src={aboutThird} alt="О компании"/>
                        </Col>
                        <Col md={12} lg={5}>
                            <p className="backgroundNumber">03</p>
                            <p className="aboutCompanyInfo">Наше предприятие специализируется на комплексных поставках и техническом обслуживании оборудования для возобновляемых источников энергии, имеет большой опыт проектирования, монтажа и сервисного обслуживания энергосберегающего оборудования.</p>
                            <p className="aboutCompanyInfo">Мы предлагаем обширнейший ассортимент систем электроотопления различных модификаций.</p>
                            <p className="aboutCompanyInfo">Среди услуг компании так же изготовление проектной доекументации любой сложности для разнообразных обьектов.</p>
                        </Col>
                    </Row>
                </Container>

                <Footer header={'Как оформить заказ? - '} redHeader={'Напишите нам!'}/>
            </>
        );
    }

}