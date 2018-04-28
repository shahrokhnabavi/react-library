import React, { Component } from 'react';

// import Classes from './App.scss';
import CaptionPanel from './components/CaptionPanel/';
import {
    CheckBox,
    TextInput,
    Button,
    Progress
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
                                width={100}
                                type="warning"
                                round={3}
                                caption="Update"
                            />
                            <Button
                                name="submit"
                                type="danger"
                                round={5}
                                caption="Delete"
                            />
                            <Button
                                name="submit"
                                type="default"
                                round={20}
                                caption="Default"
                            />
                            <Button
                                name="submit"
                                type="primary"
                                caption="Continue"
                            />
                            <Button
                                name="submit"
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
                <div className="row">
                    <div className="col-4">
                        <CaptionPanel caption="Progress Bars">
                            <Progress percent="20" type="primary"/>
                            <Progress percent="2"/>
                            <Progress percent="80" striped active/>
                            <Progress percent="30" striped active type="primary"/>
                            <Progress percent="50" striped active type="warning"/>
                            <Progress percent="42" striped active type="danger"/>
                            <Progress percent="90" striped active type="success"/>
                            <Progress percent="14" striped active type="info"/>
                        </CaptionPanel>
                    </div>


                    <div className="col-4">
                        <CaptionPanel caption="On/Off">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Slider">
                        </CaptionPanel>
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                        <CaptionPanel caption="Icon Button">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Range Slider">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Radio Button">
                        </CaptionPanel>
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                        <CaptionPanel caption="Select Box">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Tag Selector">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Hamburger Button">
                        </CaptionPanel>
                    </div>
                </div>

                <div className="row">

                    <div className="col-4">
                        <CaptionPanel caption="Modal Panel">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Slide Menu">
                        </CaptionPanel>
                    </div>

                    <div className="col-4">
                        <CaptionPanel caption="Navigation Bar">
                        </CaptionPanel>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
