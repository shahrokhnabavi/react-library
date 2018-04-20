import React, { Component } from 'react';
import logo from './logo.svg';

import Classes from './App.css';
import SCSS from './myFirst.scss';

import {
    CheckBox
} from './components/UI/';

class App extends Component {
    render() {
        return (
            <div className={Classes.App}>
                <header className={Classes.AppHeader}>
                    <img src={logo} className={Classes.AppLogo} alt="logo"/>
                    <h1 className={Classes.AppTitle}>Welcome to React</h1>
                </header>
                <p className={Classes.AppIntro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <h3 className={SCSS.TextColor}>My React UI [FLAT]</h3>

                    <CheckBox
                        id="input-id"
                        name="inputName"
                        value="12"
                        data={{'test':10}}
                        // disabled
                        dis
                        checked
                        onChange={ e => {console.log("From App Change: " + e.element.value);} }
                        onClick={ e => {console.log("From App Clicked");} }
                        captionPos="after"
                    >I am agree.</CheckBox>
                </div>
            </div>
        );
    }
}

export default App;
