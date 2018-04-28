import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const Progress = props => {
    const { percent } = props;

    const style = {
        width: ((percent >= 0 && percent <= 100) ? percent : 100) + '%',
    };

    return (
        <div className={Classes.Progress}>
            <div className={Classes.Bar} style={style}>
                <span className={Classes.Caption}>{percent}%</span>
            </div>
        </div>
    );
};

Progress.propTypes = {
    percent: PropType.number.isRequired
};

Progress.defaultProps = {
    percent: 3
};

export default Progress;