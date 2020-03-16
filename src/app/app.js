import React from "react";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../media/fonts/Myriad-Pro.otf';

//import Router
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

// importing components
import Contacts from "../contacts/contacts";
import AboutCompany from "../aboutCompany/aboutCompany";
import ListPage from "../listPage/listPage";

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
                </AnimatedSwitch>
            </Router>
        </>
    )
};

export default App;