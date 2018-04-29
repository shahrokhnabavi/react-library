import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <TextInput
 *      name="username"
 *      placeholder="enter a valid username..."
 *      label="Unique Username"
 *      style={{color: 'red'}}
 *      data={{test: 'my name'}}
 *      onChange={this.changeHandler}
 * />
 * ```
 */
const TextInput = props => {
    let input = null;

    const {
        name,
        maxLength,
        placeholder,
        label,
        style,
        data,
        userClass,
        userStyle,
        onBlur,
        onFocus,
        onClick,
        onChange,
    } = props;

    const focusHandler = event => {
        const input = event.target,
            label = input.previousElementSibling;

        if (input.value === '') {
            label.classList.add( Classes.Effect );
        }
        onFocus();
    };

    const blurHandler = event => {
        const input = event.target,
            label = input.previousElementSibling;

        input.value = input.value.trim();
        if (input.value === '') {
            label.classList.remove( Classes.Effect );
        } else {
            label.classList.add( Classes.Effect );
        }
        onBlur();
    };

    const getInput = (node) => {
        input = node;
    };

    const extraAttribute = {
        id: 'id-' + name,
        name: name,
        autoComplete: "off",
        spellCheck: "false",
        maxLength: maxLength,
        placeholder: placeholder,
    };

    return (
        <div className={[...userClass, Classes.TextInput].join(' ')} style={userStyle}>
            <label htmlFor={'id-' + name}>{label}</label>
            <Input
                type="text"
                input={getInput}
                style={style}
                extraAttribute={extraAttribute}
                data={data}
                handleClick={onClick}
                handleChange={onChange}
                handleFocus={focusHandler}
                handleBlur={blurHandler}
            />
        </div>
    );
};

TextInput.propTypes = {
    name: PropType.string.isRequired,
    maxLength: PropType.number,
    label: PropType.string,
    placeholder: PropType.string,
    data: PropType.object,
    style: PropType.object,
    userStyle: PropType.object,
    userClass: PropType.array,
    onBlur: PropType.func,
    onFocus: PropType.func,
    onClick: PropType.func,
    onChange: PropType.func,
};

TextInput.defaultProps = {
    label: "Email Address",
    placeholder: "e.g. jan.doe@email.com",
    maxLength: 64,
    data: {},
    style: {},
    userStyle: {},
    userClass: [],
    onBlur: () => { console.log("On Blur triggered"); },
    onFocus: () => { console.log("On Focus triggered"); },
    onClick: () => { console.log("On click triggered"); },
    onChange: () => { console.log("On change triggered"); },
};

export default TextInput;