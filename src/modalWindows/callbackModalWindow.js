import React, {Component} from "react";
import "./modalWindows.css";
import Modal from 'react-modal';
import emailjs from "emailjs-com";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const secondModal = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        border: '1px solid #d97000',
        color: '#d97000'
    }
};

export default class CallbackModalWindow extends Component {

    state = {
        showFirst: false,
        showSecond: false
    };

    openModal = () => {
        this.setState({showFirst: true})
    };

    openSecondModal = () => {
        this.setState({showSecond: true})
    };

    closeModal = () => {
        this.setState({showFirst: false, showSecond: false});

    };

    handleSubmit = ( e ) => {
        e.preventDefault();

        emailjs.sendForm( 'test', 'modal_form', e.target, "user_hU6rV9k4GGsqkLdd1nLrY" )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        this.closeModal();
        this.openSecondModal();
    };

    render() {
        const { showFirst, showSecond } = this.state;
        return (
            <div>
                <button onClick={this.openModal}>Обратный звонок</button>
                <Modal isOpen={showFirst}
                       onRequestClose={this.closeModal}
                       style={customStyles}>
                    <form className="d-flex flex-column modalForm" onSubmit={this.handleSubmit}>
                        <input placeholder="Ваше имя"
                               id="modalNameInput"
                               type="name"
                               name="name"
                               required
                               minLength={2}
                               maxLength={20}/>
                        <input placeholder="Ваш телефон"
                               id="modalPhoneInput"
                               type="phone"
                               name="phone"
                               required
                               minLength={8}
                               maxLength={13}/>
                        <input type="submit" value="Оправить" className="submitFormRecall"/>
                    </form>
                </Modal>
                <Modal isOpen={showSecond}
                       onRequestClose={this.closeModal}
                       style={secondModal}>
                    <h3>Заявка на обратный звонок отправлена!</h3>
                    <p>Мы с Вами свяжемся в течении 15 минут и ответим на все Ваши вопросы</p>
                    <p>(при условии что рабочий день не закончен)</p>
                </Modal>
            </div>
        )
    }
}