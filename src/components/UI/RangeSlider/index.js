import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <RangeSlider
 *      name="price"
 *      min={200}
 *      max={540}
 *      minDefaultValue={250}
 *      maxDefaultValue={300}
 *      userStyle={{}}
 *      userClass={[]}
 *      onChanged={(min, max) => console.log("Min: " + min + ", Max:" + max)}
 * />
 * ```
 */
const RangeSlider = props => {
    let minInput = null,
        maxInput = null,
        hdl = null,
        hdlType = 'min';

    const {
        name,
        min,
        max,
        minDefaultValue,
        maxDefaultValue,
        userStyle,
        userClass,
        onChanged,
    } = props;

    const getInput = (node, isMin) => {
        if( isMin ) {
            minInput = node;
        } else {
            maxInput = node;
        }
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

                minInput.value = Math.round((max-min) * left / barMax) + min;
            } else if ( hdlType === 'max' ) {
                let right = barMin + barMax + width - e.clientX;
                if( right < 0 )
                    right = 0;

                if( barMax - elMin.offsetLeft < right + elMax.offsetWidth )
                    right = barMax - elMin.offsetLeft - elMin.offsetWidth;

                elMax.style.right = right + 'px';

                maxInput.value = Math.round((max-min) * (barMax - right) / barMax) + min;
            }
            onChanged(minInput.value, maxInput.value);
        }
    });

    const down = (e, isMin) => {
        hdl = e.currentTarget;
        hdlType = isMin ? 'min' : 'max';
    };

    const cls = [...userClass, Classes.Slider];
    const style = {...userStyle};

    let minValue = minDefaultValue;
    let maxValue = minDefaultValue > maxDefaultValue ? minDefaultValue : maxDefaultValue;
    if( minValue < min )
        minValue = min;
    if( minValue > max )
        minValue = max;

    if( maxValue > max )
        maxValue = max;
    if( maxValue < min )
        maxValue = min;

    return (
        <div className={cls.join(' ')} style={style}>
            <span className={[Classes.Handler, Classes.Min].join(' ')}
                  onMouseDown={e => down(e, true)}
            />
            <span className={[Classes.Handler, Classes.Max].join(' ')}
                  onMouseDown={e => down(e, false)}
            />
            <Input
                type="hidden"
                extraAttribute={{value: minValue , name: 'min_' + name}}
                input={node => getInput(node, true)}
            />
            <Input
                type="hidden"
                extraAttribute={{value: maxValue , name: 'max_' + name}}
                input={node => getInput(node, false)}
            />
        </div>
    );
};

RangeSlider.propTypes = {
    name: PropType.string.isRequired,
    min: PropType.number,
    max: PropType.number,
    minDefaultValue: PropType.number,
    maxDefaultValue: PropType.number,
    userStyle: PropType.object,
    userClass: PropType.array,
    onChanged: PropType.func,
};

RangeSlider.defaultProps = {
    min: 1,
    max: 100,
    minDefaultValue: 50,
    maxDefaultValue: 50,
    userStyle: {},
    userClass: [],
    onChanged: (minValue, maxValue) => { console.log("RangeSlider: [Min:" + minValue + "], [Max:" + maxValue + ']'); },
};

export default RangeSlider;