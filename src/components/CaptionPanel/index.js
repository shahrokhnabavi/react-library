import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const CaptionPanel = props => {
    return (
        <div className={Classes.CaptionPanel}>
            <div className={Classes.Title}>{props.caption}</div>
            <div className={Classes.Body}>{props.children}</div>
        </div>
    );
};

CaptionPanel.propTypes = {
    caption: PropType.string.isRequired
};

CaptionPanel.defaultProps = {
    caption: "Title"
};

export default CaptionPanel;