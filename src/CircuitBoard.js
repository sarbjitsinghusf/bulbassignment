import React from 'react';
import './CircuitBoard.css';
import Bulb from './Bulb';
import Switch from './Switch';


function CircuitBoard(props) {

  return (
    <div id='ckt'>
      <Bulb />
      <Bulb />
      <Bulb />
      <Switch />

    </div>


  );

}

export default CircuitBoard;