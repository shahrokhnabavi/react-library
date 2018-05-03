import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <Slider
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
const Slider = props => {
    let input = null,
        hdl = false;

    const {
        name,
        min,
        max,
        value,
        isPercent,
        userStyle,
        userClass,
        onChanged,
    } = props;

    const getInput = (node) => {
        input = node;
    }

    window.addEventListener('mouseup', () => { hdl = null });
    window.addEventListener('mousemove', e => {
        e.preventDefault();
        if ( hdl ) {
            const el = hdl,
                parent = el.parentNode,
                position = parent.getBoundingClientRect(),
                width = Math.round(el.offsetWidth/2),
                barMax = parent.clientWidth - el.offsetWidth,
                barMin = Math.floor(position.left);

            let left = e.clientX - barMin - width;
            if( left < 0 )
                left = 0;

            if( left > barMax )
                left = barMax;

            el.style.left = left + 'px';

            const percent = Math.round( left * 100 / barMax );
            const value = min + (percent * (max - min) / 100);

            input.value = isPercent ? percent : value;
            onChanged(percent, value);
        }
    });

    const down = e => {
        hdl = e.currentTarget;
    };

    const cls = [...userClass, Classes.Slider];
    const style = {...userStyle};

    return (
        <div className={cls.join(' ')} style={style}>
            <div className={Classes.Handler}
                 onMouseDown={down}
            />
            <Input
                type="hidden"
                extraAttribute={{value: value,name: name}}
                input={getInput}
            />
        </div>
    );
};

Slider.propTypes = {
    name: PropType.string.isRequired,
    min: PropType.number,
    max: PropType.number,
    value: PropType.number,
    isPercent: PropType.bool,
    userStyle: PropType.object,
    userClass: PropType.array,
    onChanged: PropType.func,
};

Slider.defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    isPercent: true,
    userStyle: {},
    userClass: [],
    onChanged: (percent, value) => { console.log("Slider [" + percent + "]: " + value); },
};

export default Slider;