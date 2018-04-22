import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const Round = props => {

    const clickHandler = e => {
        e.preventDefault();
        const btn = e.currentTarget;
        btn.classList.add(Classes.Click);
        console.log(btn);
        setTimeout(() => btn.classList.remove(Classes.Click), 500);
    };

    const cls = [Classes.Round];

    cls.push( (props.type === "fill") ? Classes.BgZoomIn : Classes.BorderZoomIn );

    return (
        <div className={cls.join(' ')} onClick={clickHandler}>
            {props.children}
        </div>
    );
};

Round.propTypes = {
    children: PropType.object.isRequired,
    type: PropType.oneOf(['fill', 'border'])
};

Round.defaultProps = {
    type: "fill"
};

export default Round;