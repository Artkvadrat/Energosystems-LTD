import React from "react";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media/fonts/Myriad-Pro.otf';

//import Router
import { HashRouter as Router, Route} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

// importing components
import Contacts from "../contacts/contacts";
import AboutCompany from "../aboutCompany/aboutCompany";
import ListPage from "../listPage/listPage";
import DetailedListPage from "../detailedListPage/detailedListPage";
import DetailedInfoPage from "../detailedInfoPage/detailedInfoPage";

const App = () => {

    let context = {};

    return (
        <>
            <Router context={ context }>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path="/"
                           component={ AboutCompany }
                           exact/>
                    <Route path="/contact-us"
                           component={ Contacts }
                           exact/>
                    <Route path="/about-company"
                           component={ AboutCompany }
                           exact/>
                    <Route path="/services"
                           component={ ListPage }
                           exact/>
                    <Route path="/works"
                           component={ ListPage }
                           exact/>
                    <Route path="/production"
                           component={ ListPage }
                           exact/>
                    <Route path="/services/for-home"
                           render={ () => {
                               return <DetailedListPage active={'service-home'}/>
                           }}
                           exact/>
                    <Route path="/services/for-flat"
                           render={ () => {
                               return <DetailedListPage active={'service-flat'}/>
                           }}
                           exact/>
                    <Route path="/works/for-home"
                           render={ () => {
                               return <DetailedListPage active={'works-home'}/>
                           }}
                           exact/>
                    <Route path="/works/for-flat"
                           render={ () => {
                               return <DetailedListPage active={'works-flat'}/>
                           }}
                           exact/>
                    <Route path="/production/cermet-heaters"
                           render={ () => {
                               return <DetailedListPage active={'cermet-heaters'}/>
                           }}
                           exact/>
                    <Route path="/production/kettles"
                           render={ () => {
                               return <DetailedListPage active={'kettles'}/>
                           }}
                           exact/>
                    <Route path="/production/electric-radiators"
                           render={ () => {
                               return <DetailedListPage active={'electric-radiators'}/>
                           }}
                           exact/>
                    <Route path="/services/for-home/:id"
                           render={ ({ match }) => {
                               const { id } = match.params;
                               return <DetailedInfoPage id={ id }/>
                           }}/>
                    <Route path="/services/for-flat/:id"
                           render={ ({ match }) => {
                               const { id } = match.params;
                               return <DetailedInfoPage id={ id }/>
                           }}/>
                    <Route path="/works/for-home/:id"
                           render={ ({ match }) => {
                               const { id } = match.params;
                               return <DetailedInfoPage id={ id }/>
                           }}/>
                    <Route path="/works/for-flat/:id"
                           render={ ({ match }) => {
                               const { id } = match.params;
                               return <DetailedInfoPage id={ id }/>
                           }}/>
                </AnimatedSwitch>
            </Router>
        </>
    )
};

export default App;