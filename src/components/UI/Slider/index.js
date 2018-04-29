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
        onChanged,
    } = props;

    const getInput = (node) => {
        input = node;
    };

    const clickHandler = event => {
        const isOn = input.value === '',
            el = event.currentTarget,
            btn = el.childNodes[0],
            label = btn.childNodes[0];

        onChanged( !isOn, input.value );
    };

    const move = (e) => {
        e.preventDefault();
        const el = e.currentTarget,
            parent = el.parentNode;
        if ( drag ) {

            const position = parent.getBoundingClientRect(),
                  width = Math.round(el.offsetWidth/2),
                  barWidth = parent.clientWidth - el.offsetWidth;

            let left = e.clientX - Math.floor(position.left) - width;
            if( left < 0 )
                left = 0;

            if( left > barWidth )
                left = barWidth;

            el.style.left = left + 'px';

            const percent = Math.round( left * (max - min) / barWidth);
        }
    };

    window.addEventListener('mouseup', () => { drag = false});

    const down = () => {
        drag = true;
    };

    return (
        <div className={Classes.Slider}>
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
    onChanged: PropType.func,
};

Slider.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    onChanged: (isOn, value) => { console.log("Switch [" + isOn + "]: " + value); },
};

export default Slider;