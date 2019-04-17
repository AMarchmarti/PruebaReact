import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import Login from '../login';

export default class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
            <Toolbar>
                <p>Albums</p>
                <Login/>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}

