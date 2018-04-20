import React from 'react';
import PropType from 'prop-types';

const Input = props => {
    const {
        type,
        input,
        style,
        handleClick,
        handleChange,
        handleFocus,
        handleBlur,
        data, // object data={'newData':10}
        extraAttribute
    } = props;

    const dataProps = Object.keys(data).reduce((prev, key) => {
        prev['data-' + key] = data[key];
        return prev;
    }, {});

    return (
        <input
            type={type}
            ref={input}
            style={style}
            onChange={handleChange}
            onClick={handleClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...dataProps}
            {...extraAttribute}
        />
    );
};

Input.propTypes = {
    type: PropType.string.isRequired,
    input: PropType.func.isRequired,
    style: PropType.object,
    handleClick: PropType.func,
    handleChange: PropType.func,
    data: PropType.object,
    extraAttribute: PropType.object,
};

Input.defaultProps = {
    style: {},
    handleClick: () => console.log("Input is clicked"),
    handleChange: () => console.log("Input is changed"),
    handleFocus: () => console.log("Input is focused"),
    handleBlur: () => console.log("Input is blured"),
    data: {},
    extraAttribute: {},
};

export default Input;