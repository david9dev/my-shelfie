// import './reset.css';
import React, { Component } from 'react';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import duxStore from './ducks/store';
import './App.css';

/*
things i need to do:
done build out the bookcard component
make the book card clickable
done build out the endpoints neccessary to get the data for the card
build out the search component and funcitonality
build out the defference between the store and the personal library
build out the bookpreview component
finish the register page so that it does what it is supposed to 
build out the add to cart functionality when clicking on the add to cart button on the bookcard

build out the cart component
  build out the remove form cart functionality
  build the proceed to check out funcionality
 
*/
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
