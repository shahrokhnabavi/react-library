import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const Exploding = props =>
{
    const clickHandler = e => {
        e.preventDefault();
        const btn = e.currentTarget;
        btn.classList.add(Classes.isActive);
        btn.classList.toggle(Classes.isToggled);
        btn.blur();
        setTimeout(() => btn.classList.remove(Classes.isActive), 400);
    };

    return (
            <div className={Classes.Button} onClick={clickHandler}>
                {props.children}
            </div>
    );
};

Exploding.propTypes = {
    children: PropType.object.isRequired
};

export default Exploding;