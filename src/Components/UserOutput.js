import React from 'react';
import '../styles/User.css';

const output = (props) => {
  return (
    <div className="Output">
      {props.username}
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum 2</p>
    </div>
  )
}

export default output;