import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <CheckBox
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
 *  >I agree</CheckBox>
 * ```
 */
const CheckBox = props => {
    let input = null;

    const {
        captionPos,
        id,
        name,
        value,
        disabled,
        checked,
        readOnly,
        data,
        userStyle,
        userClass,
        onClick,
        onChange,
        checkStyle,
    } = props;

    const getInput = (node) => {
        input = node;
    };

    const checkBoxChange = ( e ) => {
        const el = e.target,
            component = el.parentNode;

        if( el.checked ) {
            component.classList.add(Classes.Checked);
        } else {
            component.classList.remove(Classes.Checked);
        }

        onChange({
            element: el,
            isCheck: el.checked,
            input: input
        });
    };

    const styleCheckBox = [Classes.Box],
        styleComponent = [...userClass, Classes.CheckBox],
        extraAttribute = {
            defaultChecked: checked,
            name: name,
            value: value,
            id: id
        };

    if ( disabled ) {
        extraAttribute['disabled'] = disabled;
        styleComponent.push(Classes.Disable);
    }

    if( checked ){
        styleCheckBox.push(Classes.Checked);
    }

    if ( readOnly ) {
        extraAttribute['readOnly'] = readOnly;
    }

    const INPUT = (
        <div className={styleCheckBox.join(' ')} style={checkStyle.box}>
            <Input
                type="checkbox"
                extraAttribute={extraAttribute}
                handleClick={onClick}
                handleChange={checkBoxChange}
                input={getInput}
                data={data}
            />
            <i className="fas fa-check" style={checkStyle.tick}/>
        </div>
    );
    const LABEL = <span className={Classes.Label} style={checkStyle.caption}>{props.children}</span>;

    return (
        <label className={styleComponent.join(' ')} style={userStyle}>
            {captionPos === 'before' ? LABEL : null}
            {INPUT}
            {captionPos === 'after' ? LABEL : null}
        </label>
    );
};

CheckBox.propTypes = {
    id: PropType.string,
    name: PropType.string.isRequired,
    value: PropType.any,
    data: PropType.object,
    checked: PropType.bool,
    disabled: PropType.bool,
    readOnly: PropType.bool,
    captionPos: PropType.oneOf(['before', 'none', 'after']),
    checkStyle: PropType.object,
    userStyle: PropType.object,
    userClass: PropType.array,
    onChange: PropType.func,
    onClick: PropType.func,
};

CheckBox.defaultProps = {
    id: "",
    name: "",
    value: "",
    data: {},
    checked: false,
    disabled: false,
    readOnly: false,
    captionPos: 'after',
    checkStyle: { box:{} , tick: {} , caption: {} },
    userStyle: {},
    userClass: [],
    onChange: () => console.log("CheckBox is changed"),
    onClick: () => console.log("CheckBox is clicked"),
};

export default CheckBox;