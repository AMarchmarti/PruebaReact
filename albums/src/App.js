import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {withStyles} from '@material-ui/core/styles'
import Login from './login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles({
  Button:{
    backgroundColor: 'red'
  },
  sombra:{
    boxShadow:'0px 0px 5px rgba(0,0,0.5)'
  }
})(App);
