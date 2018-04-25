import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const Button = props => {
    const {
        name,
        caption,
        type,
        round,
        width,
        height,
        style,
        data,
        onClick,
    } = props;

    const dataProps = Object.keys(data).reduce((prev, key) => {
        prev['data-' + key] = data[key];
        return prev;
    }, {});

    const inlineStyle = {
        ...style,
        width: width + 'px',
        height: height + 'px'
    };

    const cls = [ Classes.Button ];

    switch( round ){
        case 3:
            cls.push(Classes.Round3);
            break;
        case 5:
            cls.push(Classes.Round5);
            break;
        case 20:
            cls.push(Classes.Round20);
            break;
    }

    switch( type ){
        case 'warning':
            cls.push(Classes.Warning);
            break;
    }

    return (
        <button
            className={cls.join(' ')}
            name={name}
            style={inlineStyle}
            data={data}
            onClick={onClick}
            onMouseDown={ e => e.target.classList.add( Classes.Pressed ) }
            onMouseUp={ e => e.target.classList.remove( Classes.Pressed ) }
            {...dataProps}
        >
            {caption}
        </button>
    );
};

Button.propTypes = {
    name: PropType.string.isRequired,
    caption: PropType.string.isRequired,
    type: PropType.oneOf(['default', 'warning']).isRequired,
    round: PropType.oneOf([0,3,5,20]),
    width: PropType.number,
    heights: PropType.number,
    data: PropType.object,
    style: PropType.object,
    onClick: PropType.func
};

Button.defaultProps = {
    type: 'default',
    round: 0,
    height: 35,
    data: {},
    style: {},
    onClick: () => { console.log("Clicked"); }
};

export default Button;