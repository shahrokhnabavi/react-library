import React from 'react';
import PropType from 'prop-types';

import Classes from './CheckBox.scss';
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
 *      style={
 *          {
 *              box: { width: '200px' },
 *              caption: { color: 'red' },
 *              tick: { top: '20px' }
 *          }
 *      }
 *      onChange={ e => {console.log("From App Change: " + e.element.value);} }
 *      onClick={ e => {console.log("From App Clicked");} }
 *  >I am agree</CheckBox>
 * ```
 */
class CheckBox extends React.Component {
    /*
        styling = {
            color: 'red',
            borderSize: '3px',
            size: '20px'
        },
    */

    constructor( props ) {
        super(props);

        this.state = {
            isCheck: 'checked' in props
        };
    }

    render() {
        const {
            captionPos,
            id,
            name,
            value,
            disabled,
            readOnly,
            data,
            onClick,
            style,
        } = this.props;

        const styleCheckBox = [Classes.Box],
            styleComponent = [Classes.CheckBox],
            extraAttribute = {
                defaultChecked: this.state.isCheck,
                name: name,
                value: value,
                id: id
            };

        if ( this.state.isCheck ) {
            styleCheckBox.push(Classes.Checked);
        }

        if ( disabled ) {
            extraAttribute['disabled'] = disabled;
            styleComponent.push(Classes.Disable);
        }

        if ( readOnly ) {
            extraAttribute['readOnly'] = readOnly;
        }

        const INPUT = (
            <div className={styleCheckBox.join(' ')} style={style.box}>
                <Input
                    type="checkbox"
                    extraAttribute={extraAttribute}
                    handleClick={onClick}
                    handleChange={this.checkBoxChange}
                    input={this.getInput}
                    data={data}
                />
                <i className="fas fa-check" style={style.tick}></i>
            </div>
        );
        const LABEL = <span className={Classes.Label} style={style.caption}>{this.props.children}</span>;

        return (
            <label className={styleComponent.join(' ')}>
                {captionPos === 'before' ? LABEL : null}
                {INPUT}
                {captionPos === 'after' ? LABEL : null}
            </label>
        );
    }

    checkBoxChange = ( e ) => {
        const isCheck = this.state.isCheck;
        this.setState({ isCheck: !isCheck });

        this.props.onChange({
            element: e.target,
            isCheck: !isCheck,
        })
    };

    getInput = (node) => {
        this.input = node;
    };
}

CheckBox.propTypes = {
    id: PropType.string,
    name: PropType.string.isRequired,
    value: PropType.any,
    data: PropType.object,
    checked: PropType.bool,
    disabled: PropType.bool,
    readOnly: PropType.bool,
    captionPos: PropType.oneOf(['before', 'none', 'after']),
    onChange: PropType.func,
    onClick: PropType.func,
};

CheckBox.defaultProps = {
    captionPos: 'after',
    onClick: () => console.log("Input is clicked"),
    onChange: () => console.log("Input is changed"),
};

export default CheckBox;