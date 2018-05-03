import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <RangeSlider
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
const RangeSlider = props => {
    let input = null,
        hdl = null,
        hdlType = 'min';

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

    window.addEventListener('mouseup', () => { hdl = null; });
    window.addEventListener('mousemove', e => {
        e.preventDefault();
        if( hdl ){
            const parent = hdl.parentNode,
                elMin = parent.childNodes[0],
                elMax = parent.childNodes[1],
                position = parent.getBoundingClientRect(),
                width = Math.round(elMin.offsetWidth/2),
                barMax = parent.clientWidth - elMin.offsetWidth,
                barMin = Math.floor(position.left);

            if ( hdlType === 'min' ) {
                let left = e.clientX - barMin - width;
                if( left < 0 )
                    left = 0;

                if( elMax.offsetLeft < left + elMin.offsetWidth )
                    left = elMax.offsetLeft - elMax.offsetWidth;

                elMin.style.left = left + 'px';

                const percent = Math.round( left * 100 / barMax );
                const value = min + (percent * (max - min) / 100);

                // input.value = isPercent ? percent : value;
                // onChanged(percent, value);
            } else if ( hdlType === 'max' ) {
                let right = barMin + barMax + width - e.clientX;
                if( right < 0 )
                    right = 0;

                if( barMax - elMin.offsetLeft < right + elMax.offsetWidth )
                    right = barMax - elMin.offsetLeft - elMin.offsetWidth;

                elMax.style.right = right + 'px';
            }
        }
    });

    const down = (e, isMin) => {
        hdl = e.currentTarget;
        hdlType = isMin ? 'min' : 'max';
    };
    return (
        <div className={Classes.Slider}>
            <span className={[Classes.Handler, Classes.Min].join(' ')}
                  onMouseDown={e => down(e, true)}
            />
            <span className={[Classes.Handler, Classes.Max].join(' ')}
                  onMouseDown={e => down(e, false)}
            />
        </div>
    );
};

RangeSlider.propTypes = {
};

RangeSlider.defaultProps = {
};

export default RangeSlider;