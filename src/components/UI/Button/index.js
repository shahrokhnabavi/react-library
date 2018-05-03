import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import * as setting from '../constants';

/**
 * Usage Example:
 * ```
 * <Button
 *      icon="user"
 *      name="submit"
 *      type="info"
 *      caption="Button"
 *      round={3}
 *      width={30}
 *      height={30}
 *      userStyle={{}}
 *      userClass={[]}
 *      data={{
 *          label: "some name"
 *      }}
 *      onClick={ () => { alert('HOOOORAAA'); }}
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
        icon,
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
        width: width ? width + 'px' : '100%',
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

    let fontIcon = '';
    if( icon ){
        cls.push( Classes.Icon );
        fontIcon = <span className={"fa fa-" + icon}/>
    }

    return (
        <button
            className={cls.join(' ')}
            name={name}
            style={inlineStyle}
            data={data}
            onClick={onClick}
            onMouseDown={ e => e.currentTarget.classList.add( Classes.Pressed ) }
            onMouseUp={ e => e.currentTarget.classList.remove( Classes.Pressed ) }
            {...dataProps}
        >
            {fontIcon}{caption}
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
    icon: PropType.string,
    data: PropType.object,
    userStyle: PropType.object,
    userClass: PropType.array,
    onClick: PropType.func
};

Button.defaultProps = {
    name: "button_name",
    caption: "",
    type: "default",
    round: 0,
    width: 0,
    height: 35,
    icon: '',
    data: {},
    userStyle: {},
    userClass: [],
    onClick: () => { console.log("Button is Clicked"); }
};

export default Button;