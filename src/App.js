import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    names: [
      { username: 'Dylan' },
      { username: 'Bob' },
      { username: 'Jeff' }
    ]
  }

  handleNameChange = (e) => {
    this.setState({
      names: [
        { username: e.target.value },
        { username: 'Bob' },
        { username: 'Jeff' }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      textAlign: 'center'
    };

    return (
      <div>
        <UserOutput username={this.state.names[0].username} />
        <UserInput change={this.handleNameChange} style={style} />
        <UserOutput username={this.state.names[1].username} />
        <UserInput change={this.handleNameChange} style={style} />
        <UserOutput username={this.state.names[2].username} />
        <UserInput change={this.handleNameChange} style={style} />
      </div >
    );
  }
}

export default App;
