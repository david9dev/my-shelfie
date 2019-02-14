import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      page: "",
      
    }
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.page}</p>
      </div>
    );
  }
}

export default App;
