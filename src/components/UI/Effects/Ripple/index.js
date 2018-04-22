import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

class Ripple extends React.Component
{
    state = {
        diameter: 20,
        left: 0,
        top: 0
    };

    render() {
        let style = {
                height: this.state.diameter,
                width: this.state.diameter,
                left: this.state.left,
                top: this.state.top,
            };

        return (
            <div className={Classes.ItemContent} onMouseDown={this.ClickHandler}>
                <span className={Classes.Ink} style={style} />
                {this.props.children}
            </div>
        );
    }

    ClickHandler = e => {
        const parent = e.currentTarget,
            ink = parent.childNodes[0],
            maxDiameter = Math.max(parent.offsetWidth, parent.offsetHeight);

            ink.classList.add(Classes.Animate);
            this.setState({
                left: e.clientX - parent.offsetLeft - maxDiameter/2,
                top: e.clientY - parent.offsetTop - maxDiameter/2,
                diameter: maxDiameter
            });

            setTimeout( () => {
                ink.classList.remove(Classes.Animate);
            }, 650);
    };
}

Ripple.propTypes = {
    children: PropType.object.isRequired
};

export default Ripple;