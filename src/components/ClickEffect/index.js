import React from 'react';
//import PropType from 'prop-types';

import {Ripple} from '../UI/';

class ClickEffect extends React.Component
{
    render() {
        const drop = {
            font: 'normal 14px/28px Montserrat',
            color: 'blue',
            display: 'block',
            padding: '10px 15px',
            textDecoration: 'none',
            cursor: 'pointer',
            userSelect: 'none',
            position: 'relative'
        };

        const ul = { listStyle: 'none',
            background: 'white',
            width: '200px',
            border: '1px solid #ccc',
            margin: '0 auto',
            padding: '0'
        };

        return (
            <div>
                <ul style={ul}>
                    <li>
                        <Ripple><a style={drop}>Home</a></Ripple>
                    </li>
                    <li>
                        <Ripple><a style={drop}>About</a></Ripple>
                    </li>
                    <li>
                        <Ripple><a style={drop}>Test</a></Ripple>
                    </li>
                </ul>
            </div>
        );
    }
}

ClickEffect.propTypes = {
    //type: PropType.string.isRequired
};

ClickEffect.defaultProps = {
    //tpye: "Susscess"
};

export default ClickEffect;