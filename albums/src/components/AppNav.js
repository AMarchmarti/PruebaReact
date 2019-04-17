import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';

export default class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar>
            <Toolbar/>
        </AppBar>
      </div>
    )
  }
}

