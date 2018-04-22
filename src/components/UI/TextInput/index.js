import React from 'react';
//import PropType from 'prop-types';

//import Classes from './style.scss';

const TextInput = props => {
    return (
        <div className="test">
            <label>Place</label>
            <input id='location' type="text" maxlength="10" placeholder="e.g. Home, Supermarket, Library.."/>
            <span data-count="location" className="textCounter"/>
            <span className="notice" />
        </div>
    );
};

TextInput.propTypes = {
    //type: PropType.string.isRequired
};

TextInput.defaultProps = {
    //type: "Susscess"
};

export default TextInput;