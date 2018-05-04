import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <RadioButton
 *      id="input-id"
 *      name="inputName"
 *      value="12"
 *      data={{'test':10}}
 *      checked
 *      captionPos="before"
 *      checkStyle={
 *          {
 *              box: { width: '200px' },
 *              caption: { color: 'red' },
 *              tick: { top: '20px' }
 *          }
 *      }
 *      onChange={ e => {console.log("From App Change: " + e.element.value);} }
 *      onClick={ e => {console.log("From App Clicked");} }
 *  >I agree</RadioButton>
 * ```
 */
const RadioButton = props => {
    let input = null;

    const {
        captionPos,
        name,
        value,
        checked,
        disabled,
        readOnly,
        data,
        userClass,

        userStyle,
        onClick,
        onChange,
    } = props;

    const getInput = (node) => {
        input = node;
    };

    const checkBoxChange = ( e ) => {
        e.preventDefault();
        const el = e.currentTarget,
            nodeList = Array.from( el.parentNode.childNodes ),
            index = nodeList.indexOf(el);

        nodeList.map( (item,key ) => {
            if( key === index ){
                item.classList.add( Classes.Checked );
                input.checked = true;
            } else {
                item.classList.remove( Classes.Checked );
            }
        });
    };

    const componentClass = [...userClass, Classes.RadioButton],
        extraAttribute = {
            defaultChecked: checked,
            name: name + '[]',
            value: value,
        };

    if ( disabled ) {
        extraAttribute['disabled'] = disabled;
        componentClass.push(Classes.Disable);
    }

    if( checked ){
        componentClass.push(Classes.Checked);
    }

    if ( readOnly ) {
        extraAttribute['readOnly'] = readOnly;
    }

    const INPUT = (
        <div className={Classes.Radio}>
            <Input
                type="radio"
                extraAttribute={extraAttribute}
                // handleClick={onClick}
                // handleChange={checkBoxChange}
                input={getInput}
                data={data}
            />
            <span />
        </div>
    );
    const LABEL = <span className={Classes.Label}>{props.children}</span>;

    return (
        <div className={componentClass.join(' ')} onClick={checkBoxChange}>
            {captionPos === 'before' ? LABEL : null}
            {INPUT}
            {captionPos === 'after' ? LABEL : null}
        </div>
    );
};

RadioButton.propTypes = {
    id: PropType.string,
    name: PropType.string.isRequired,
    value: PropType.any,
    data: PropType.object,
    checked: PropType.bool,
    disabled: PropType.bool,
    readOnly: PropType.bool,
    captionPos: PropType.oneOf(['before', 'none', 'after']),
    userStyle: PropType.object,
    userClass: PropType.array,
    onChange: PropType.func,
    onClick: PropType.func,
};

RadioButton.defaultProps = {
    id: "",
    name: "",
    value: "",
    data: {},
    checked: false,
    disabled: false,
    readOnly: false,
    captionPos: 'after',
    userStyle: {},
    userClass: [],
    onChange: () => console.log("RadioButton is changed"),
    onClick: () => console.log("RadioButton is clicked"),
};

export default RadioButton;