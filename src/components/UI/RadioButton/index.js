import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <RadioButton
 *      name="inputName"
 *      value="12"
 *      checked={false}
 *      disabled={false}
 *      readOnly={false}
 *      data={{'test':10}}
 *      captionPos="before"
 *      userClass={[]}
 *      userStyle={{ width: '200px', color: 'red', top: '20px'}}
 *      onClick={ value => {console.log("From App Clicked");} }
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
            return null;
        });
        onClick( input.value );
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
                input={getInput}
                data={data}
            />
            <span />
        </div>
    );
    const LABEL = <span className={Classes.Label}>{props.children}</span>;

    return (
        <div className={componentClass.join(' ')} onClick={checkBoxChange} style={{...userStyle}}>
            {captionPos === 'before' ? LABEL : null}
            {INPUT}
            {captionPos === 'after' ? LABEL : null}
        </div>
    );
};

RadioButton.propTypes = {
    name: PropType.string.isRequired,
    value: PropType.any,
    data: PropType.object,
    checked: PropType.bool,
    disabled: PropType.bool,
    readOnly: PropType.bool,
    captionPos: PropType.oneOf(['before', 'none', 'after']),
    userStyle: PropType.object,
    userClass: PropType.array,
    onClick: PropType.func,
};

RadioButton.defaultProps = {
    name: "",
    value: "",
    data: {},
    checked: false,
    disabled: false,
    readOnly: false,
    captionPos: 'after',
    userStyle: {},
    userClass: [],
    onClick: value => console.log("RadioButton with value " + value + " is clicked"),
};

export default RadioButton;