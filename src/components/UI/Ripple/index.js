import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';

class Ripple extends React.Component
{
    state = {
        diameter: 20,
        classes: [ Classes.Ink ],
        left: 0,
        top: 0
    };

    render() {

        let cls = this.state.classes.join(' '),
            style = {
                height: this.state.diameter,
                width: this.state.diameter,
                left: this.state.left,
                top: this.state.top,
            };

        return (
            <div className={Classes.ItemContent} onMouseDown={this.ClickHandler}>
                <span className={cls} style={style} />
                {this.props.children}
            </div>
        );
    }

    ClickHandler = e => {
        const parent = e.currentTarget,
            maxDiameter = Math.max(parent.offsetWidth, parent.offsetHeight);

        if( this.state.classes.length === 1 ) {
            const cls = [...this.state.classes];
            cls.push(Classes.Animate);
            this.setState({
                classes: cls,
                left: e.clientX - parent.offsetLeft - maxDiameter/2,
                top: e.clientY - parent.offsetTop - maxDiameter/2,
                diameter: maxDiameter
            });
        }
    };

    componentDidUpdate(){
        if( this.state.classes.length > 1 ) {
            setTimeout( () => {
                this.setState({ classes: [Classes.Ink] });
            }, 650);
        }
    }
}

Ripple.propTypes = {
    children: PropType.object.isRequired
};

export default Ripple;