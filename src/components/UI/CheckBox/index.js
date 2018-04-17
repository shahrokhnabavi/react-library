import React from 'react';
//import PropType from 'prop-types';

import Classes from './CheckBox.scss';
import Aux from '../../HOC/Aux';

const CheckBox = props => {
    let isCheck = true,
        captionPos = 'after',
        data = [],
        id = "",
        isDisable = false;
    return (
        <Aux>
            <label>
                <input type="checkbox" name="sdfsd" defaultChecked value="ss" />
                text label
                <span className={Classes.Checkmark}></span>
            </label>
        </Aux>
    );
};

CheckBox.propTypes = {
    //type: PropType.string.isRequired
};

CheckBox.defaultProps = {
    //tpye: "Susscess"
};

export default CheckBox;