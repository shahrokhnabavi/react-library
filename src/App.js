import React, { Component } from 'react';

// import Classes from './App.scss';
import CaptionPanel from './components/CaptionPanel/';
import {
    CheckBox,
    TextInput,
    Button
} from './components/UI/';

class App extends Component {
    state = {
        show: false
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>My React UI [FLAT]</h3>
                    </div>
                </div>
                <div className="row">


                    <div className="col-4">
                        <CaptionPanel caption="CheckBox">

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
                            <CheckBox name="ex6" disabled checked>Disable Checked</CheckBox>

                        </CaptionPanel>
                    </div>


                    <div className="col-4">
                        <CaptionPanel caption="InputText">

                            <TextInput
                                name="username"
                                placeholder="enter a valid username..."
                                label="Unique Username"
                            />

                            <TextInput
                                name="phone"
                                placeholder="your phone number..."
                                label="Your Phone"
                            />
                            <TextInput
                                name="username"
                                placeholder="enter a valid username..."
                                label="Unique Username"
                                style={{color: 'red'}}
                                data={{test: 'my name'}}
                            />

                        </CaptionPanel>
                    </div>


                    <div className="col-4">
                        <CaptionPanel caption="Button">

                            <Button
                                name="submit"
                                width={200}
                                type="warning"
                                round={3}
                                caption="Update"
                            />
                            <Button
                                name="submit"
                                width={200}
                                type="danger"
                                round={5}
                                caption="Delete"
                            />
                            <Button
                                name="submit"
                                width={200}
                                type="default"
                                round={20}
                                caption="Default"
                            />
                            <Button
                                name="submit"
                                width={200}
                                type="primary"
                                caption="Continue"
                            />
                            <Button
                                name="submit"
                                width={200}
                                type="success"
                                caption="Save User"
                            />
                            <Button
                                name="submit"
                                type="info"
                                caption="Show Details"
                            />

                        </CaptionPanel>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
