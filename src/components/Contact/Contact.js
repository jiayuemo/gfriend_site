import React, {Component} from 'react';
import './Contact.css';
import logo from './../../logo.svg';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h1>Contact us page</h1>
                <h2>This app made with React</h2>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default Contact;
