import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import * as setting from '../constants';

/**
 * Usage Example:
 * ```
 * <Button
 *      name="submit"
 *      width={100}
 *      type="warning"
 *      round={3}
 *      caption="Update"
 * />
 * ```
 */
const Button = props => {
    const {
        name,
        caption,
        type,
        round,
        width,
        height,
        userStyle,
        userClass,
        data,
        onClick,
    } = props;

    const dataProps = Object.keys(data).reduce((prev, key) => {
        prev['data-' + key] = data[key];
        return prev;
    }, {});

    const inlineStyle = {
        ...userStyle,
        width: width + 'px',
        height: height + 'px'
    };

    const cls = [...userClass, Classes.Button];

    switch( round ){
        case 3:
            cls.push(Classes.Round3);
            break;
        case 5:
            cls.push(Classes.Round5);
            break;
        case 20:
            cls.push(Classes.Round20);
            break;
        default:
            break;
    }

    switch( type ){
        case 'warning':
            cls.push(Classes.Warning);
            break;
        case 'danger':
            cls.push(Classes.Danger);
            break;
        case 'primary':
            cls.push(Classes.Primary);
            break;
        case 'success':
            cls.push(Classes.Success);
            break;
        case 'info':
            cls.push(Classes.Info);
            break;
        default:
            cls.push(Classes.Default);
    }

    return (
        <button
            className={cls.join(' ')}
            name={name}
            style={inlineStyle}
            data={data}
            onClick={onClick}
            onMouseDown={ e => e.target.classList.add( Classes.Pressed ) }
            onMouseUp={ e => e.target.classList.remove( Classes.Pressed ) }
            {...dataProps}
        >
            {caption}
        </button>
    );
};

Button.propTypes = {
    name: PropType.string.isRequired,
    caption: PropType.string.isRequired,
    type: PropType.oneOf(setting.componentTypes).isRequired,
    round: PropType.oneOf([0,3,5,20]),
    width: PropType.number,
    height: PropType.number,
    data: PropType.object,
    userStyle: PropType.object,
    userClass: PropType.array,
    onClick: PropType.func
};

Button.defaultProps = {
    name: "button_name",
    caption: "Button",
    type: "default",
    round: 0,
    width: "100%",
    height: 35,
    data: {},
    userStyle: {},
    userClass: [],
    onClick: () => { console.log("Button is Clicked"); }
};

export default Button;