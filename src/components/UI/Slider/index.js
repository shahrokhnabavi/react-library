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
        drag = false;

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
    };

    const move = (e) => {
        e.preventDefault();
        const el = e.currentTarget,
            parent = el.parentNode;
        if ( drag ) {
            const position = parent.getBoundingClientRect(),
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
    };

    window.addEventListener('mouseup', () => { drag = false});

    const down = () => {
        drag = true;
    };

    const cls = [...userClass, Classes.Slider];
    const style = {...userStyle};

    return (
        <div className={cls.join(' ')} style={style}>
            <div className={Classes.Handler}
                 onMouseMove={move}
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
    value: 50,
    isPercent: true,
    userStyle: {},
    userClass: [],
    onChanged: (percent, value) => { console.log("Slider [" + percent + "]: " + value); },
};

export default Slider;