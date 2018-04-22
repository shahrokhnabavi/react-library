import React, { Component } from 'react';

import Classes from './App.css';

import {
    CheckBox
} from './components/UI/';
import {Round} from './components/UI/Effects/';

class App extends Component {
    render() {
        return (
            <div className={Classes.App}>
                <h3>My React UI [FLAT]</h3>

                <CheckBox name="ex1"/><br/>
                <CheckBox name="ex2" captionPos="before">Caption Before</CheckBox><br />
                <CheckBox id="input-id" name="ex3" value="12"
                          captionPos="after"
                          onChange={ e => {console.log("From App Change: " + e.element.value);} }
                          onClick={ e => {console.log("From App Clicked");} }
                >Caption After.</CheckBox>
                <br />
                <CheckBox name="ex4" checked>Default Checked</CheckBox><br />
                <CheckBox name="ex5" disabled>Disable Unchecked</CheckBox><br />
                <CheckBox name="ex6" disabled checked>Disable Checked</CheckBox><br />
                
                <hr />

            </div>
        );
    }
}

export default App;
