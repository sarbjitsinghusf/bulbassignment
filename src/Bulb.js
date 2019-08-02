import React from 'react';
import './Bulb.css';
import { connect } from 'react-redux';
function Bulb(props) {
  const c = props.state ? 'on' : 'off';
  return (
    <div className={c} id='bl'>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.isSwitchOn
  };
};

export default connect(mapStateToProps)(Bulb);