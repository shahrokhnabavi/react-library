import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

/**
 * Usage Example:
 * ```
 * <TextInput
 *      name="username"
 *      placeholder="enter a valid username..."
 *      label="Unique Username"
 * />
 * ```
 */
const TextInput = props => {

    const { name, maxLength, placeholder, label } = props;

    const focusHandler = event => {
        const input = event.target,
            label = input.previousElementSibling;

        if (input.value === '') {
            label.classList.add( Classes.Effect );
        }
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
    };

    return (
        <div className={Classes.TextInput}>
            <label htmlFor={'id-' + name}>{label}</label>
            <input id={'id-' + name} name={name} type="text" autoComplete="off" spellCheck="false"
                   maxLength={maxLength}
                   placeholder={placeholder}
                   onFocus={focusHandler}
                   onBlur={blurHandler}
            />
        </div>
    );
};

TextInput.propTypes = {
    name: PropType.string.isRequired,
    maxLength: PropType.number,
    label: PropType.string,
    placeholder: PropType.string,
};

TextInput.defaultProps = {
    label: "Email Address",
    placeholder: "e.g. jan.doe@email.com",
    maxLength: 64
};

export default TextInput;