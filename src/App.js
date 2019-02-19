import React, { Component } from 'react';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import duxStore from './ducks/store';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <div className="App">
      <Provider store={duxStore}>
        <Router>
          <Routes/>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
