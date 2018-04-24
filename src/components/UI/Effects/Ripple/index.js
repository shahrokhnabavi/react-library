import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

const Ripple = props =>
{
    const ClickHandler = e => {
        const el = e.currentTarget,
            parent = el.parentNode,
            ink = el.childNodes[0],
            maxDiameter = Math.max(parent.offsetWidth, parent.offsetHeight);

        parent.style.margin = '0';
        parent.style.padding = '0';

        el.style.width = parent.clientWidth + 'px';
        el.style.height = parent.clientHeight + 'px';

        ink.classList.add(Classes.Animate);

        ink.style.width = maxDiameter + 'px';
        ink.style.height = maxDiameter + 'px';
        ink.style.left = e.clientX - parent.offsetLeft - maxDiameter/2 + 'px';
        ink.style.top = e.clientY - parent.offsetTop - maxDiameter/2 + 'px';

        setTimeout( () => {
            ink.classList.remove(Classes.Animate);
        }, 650);
    };

    return (
        <div className={Classes.ItemContent} onMouseDown={ClickHandler}>
            <span className={Classes.Ink} />
            {props.children}
        </div>
    );
}

Ripple.propTypes = {
    children: PropType.object.isRequired
};

export default Ripple;