import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import * as setting from '../constants';

/**
 * Usage Example:
 * ```
 * <Progress
 *      percent="30"
 *      striped
 *      active
 *      type="primary"
 * />
 * ```
 */
const Progress = props => {
    const { percent, active, striped, type } = props;

    const style = {
        width: ((percent >= 0 && percent <= 100) ? percent : 100) + '%',
    };

    const barClass = [Classes.Bar];
    if( active ) {
        barClass.push( Classes.Active );
    }

    if( striped ) {
        barClass.push( Classes.Striped );
    }

    const cls = [Classes.Progress];
    switch( type ){
        case 'warning':
            cls.push(Classes.Warning);
            break;
        case 'danger':
            cls.push(Classes.Danger);
            break;
        case 'primary':
            cls.push(Classes.Primary);
            break;
        case 'success':
            cls.push(Classes.Success);
            break;
        case 'info':
            cls.push(Classes.Info);
            break;
        default:
            cls.push(Classes.Default);
    }

    return (
        <div className={cls.join(' ')}>
            <div className={barClass.join(' ')} style={style}>
                <span>{percent}%</span>
            </div>
        </div>
    );
};

Progress.propTypes = {
    percent: PropType.number.isRequired,
    active: PropType.bool,
    striped: PropType.bool,
    type: PropType.oneOf(setting.componentTypes)
};

Progress.defaultProps = {
    percent: 3,
    active: false,
    striped: false,
    type: 'default'
};

export default Progress;