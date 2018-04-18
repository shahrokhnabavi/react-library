import React from 'react';
//react-component/checkbox/blob/master/src/Checkbox.jsx
//import PropType from 'prop-types';

import Classes from './CheckBox.scss';

class CheckBox extends React.Component {
    /*
        captionPos = 'after',
        styling = {
            color: 'red',
            borderSize: '3px',
            size: '20px'
        },
    */
    state = {
        isCheck: false
    };

    render() {
        const {
            className, // add this to parent of form elements
            style, // add this to parent of form elements
            name, // add this to parent of form elements
            id, // add this to parent of form elements
            type,  // add this to parent of form elements
            disabled,
            readOnly,
            onClick,
            onFocus,
            onBlur,
            autoFocus,
            value,
            data, // object data={'newData':10}
            isChecked,
        } = this.props;


        const dataProps = Object.keys(data).reduce((prev, key) => {
            prev['data-' + key] = data[key];
            return prev;
        }, {});

        const myClass = [ className, Classes.Box ];
        if( this.state.isCheck ){
            myClass.push(Classes.Checked);
        }
        console.log(myClass);

        return (
            <label className={Classes.CheckBox}>
                <div className={myClass.join(' ')}>
                    <input
                        type="checkbox"
                        name="sdfsd"
                        defaultChecked
                        value="ss"
                        {...dataProps}
                        onClick={this.checkBoxClicked}
                    />
                    <i className="fas fa-check"></i>
                </div>
                <span className={Classes.Label}>{this.props.children}</span>
            </label>
        );
    }

    checkBoxClicked = (e) => {
        console.log(e.target);
        const isCheck = this.state.isCheck;
        this.setState({isCheck: !isCheck});
    };
};

CheckBox.propTypes = {
    //type: PropType.string.isRequired
};

CheckBox.defaultProps = {
    //tpye: "Susscess"
    className: ''
};

export default CheckBox;