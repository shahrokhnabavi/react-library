import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

/**
 * Usage Example:
 * ```
 * <Tooltips
 * />
 * ```
 */
const Tooltips = props => {
    const {
        caption,
        position,
        userClass,
        userStyle,
    } = props;

    const cls = [...userClass, Classes.Tooltip];

    switch( position ){
        case 'bottom':
            cls.push( Classes.Bottom );
            break;
        case 'left':
            cls.push( Classes.Left );
            break;
        case 'right':
            cls.push( Classes.Right );
            break;
        default:
            cls.push( Classes.Top );
            break;
    }

    return (
        <div className={cls.join(' ')} style={{...userStyle}}>
            <span className={Classes.TextTooltip}><span>{caption}</span></span>
            {props.children}
        </div>
    );
};

Tooltips.propTypes = {
    caption: PropType.string.isRequired,
    position: PropType.oneOf(['top', 'bottom', 'left', 'right']),
    userStyle: PropType.object,
    userClass: PropType.array,
};

Tooltips.defaultProps = {
    caption: '',
    position: 'top',
    userStyle: {},
    userClass: [],
};

export default Tooltips;