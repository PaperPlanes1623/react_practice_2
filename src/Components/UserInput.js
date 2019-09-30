import React from 'react';
import '../styles/User.css';

const input = (props) => {
  return (
    <div className="Input">
      <input type="text" onChange={props.change} value={props.username} />
    </div>
  )
}

export default input;