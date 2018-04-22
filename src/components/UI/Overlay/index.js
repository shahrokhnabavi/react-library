import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
/**
 * Usage Example:
 * ```
 * <Overlay
 *      show={this.state.show}
 *      closed={
 *          () => {
 *              const show = this.state.show;
 *              this.setState({
 *                  show: !show
 *              });
 *          }
 *      }
 *  >
 *      <div className="login-panel">Username: <input /><br/>Password: <input /></div>
 *  </Overlay>
 * ```
 */
const Overlay = props => {

    const cls = [ Classes.Overlay ];
    if( props.show ){
        cls.push( Classes.Show );
    }

    return (
        <div className={cls.join(' ')} onClick={props.closed}>
            <div className={Classes.Panel}>
                {props.children}
            </div>
        </div>
    );
};

Overlay.propTypes = {
    children: PropType.object.isRequired,
    closed: PropType.func.isRequired
};

Overlay.defaultProps = {
    //type: "Susscess"
};

export default Overlay;