import React from 'react';
import './Switch.css';
import { connect } from 'react-redux';

function Switch(props) {

    return (
        <div id='switch'>
            <button id='btn' onClick={() => props.SWITCH_TOGGLE(props.state)}>{props.state ? '1' : '0'}</button>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        state: state.isSwitchOn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SWITCH_TOGGLE: (prev) => dispatch({ type: 'SWITCH_TOGGLE', value: prev })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);