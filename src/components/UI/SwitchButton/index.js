import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <SwitchButton
 *      name="name01"
 *      switchOn
 *      labelOff="Landing"
 *      valueOff="zero"
 *      labelOn="Taking off"
 *      valueOn="one"
 *      width={120}
 * />
 * ```
 */
const SwitchButton = props => {
    let input = null;

    const {
        name,
        labelOn,
        labelOff,
        valueOn,
        valueOff,
        switchOn,
        width,
        userStyle,
        userClass,
        onChanged,
    } = props;

    const getInput = (node) => {
        input = node;
    };

    const clickHandler = event => {
        const isOn = input.value === valueOn,
            el = event.currentTarget,
            btn = el.childNodes[0],
            label = btn.childNodes[0];

        if( isOn ){
            input.value = valueOff;
            btn.classList.remove( Classes.On );
            btn.classList.add( Classes.Off );
            btn.style.transform = 'translateX(' + Math.floor(width/2) + 'px)';
            label.textContent = labelOff;
        } else {
            input.value = valueOn;
            btn.classList.remove( Classes.Off );
            btn.classList.add( Classes.On );
            btn.style.transform = 'translateX(0px)';
            label.textContent = labelOn;
        }
        onChanged( !isOn, input.value );
    };

    const switchCls = [Classes.Switch, (switchOn ? Classes.On : Classes.Off)];
    const label = switchOn ? labelOn : labelOff;
    const value = switchOn ? valueOn : valueOff;
    const positionOff = Math.round(width/2);
    const styleSwitch = {
        width: positionOff + 'px',
        transform: 'translate(' + (switchOn ? 0 : positionOff) + 'px)'
    };


    const cls = [...userClass, Classes.SwitchButton];
    const style = {...userStyle,  width: width + 'px'};

    return (
        <div className={cls.join(' ')} style={style} onClick={clickHandler}>
            <div className={switchCls.join(' ')} style={styleSwitch}>
                <span>{label}</span>
            </div>
            <Input
                type="hidden"
                extraAttribute={{value: value,name: name}}
                input={getInput}
            />
        </div>
    );
};

SwitchButton.propTypes = {
    name: PropType.string.isRequired,
    labelOn: PropType.string,
    labelOff: PropType.string,
    valueOn: PropType.string,
    valueOff: PropType.string,
    switchOn: PropType.bool,
    width: PropType.number,
    userStyle: PropType.object,
    userClass: PropType.array,
    onChanged: PropType.func,
};

SwitchButton.defaultProps = {
    labelOn: 'ON',
    labelOff: 'OFF',
    valueOn: '1',
    valueOff: '0',
    switchOn: false,
    width: 60,
    userStyle: {},
    userClass: [],
    onChanged: (isOn, value) => { console.log("Switch [" + isOn + "]: " + value); },
};

export default SwitchButton;