import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase'


export default class Login extends Component {

  login = () => {
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result => {
          console.log(result)
      })}

  render() {
    return (
    <div>
        <Button variant='contained' onClick={this.login}> Iniciar Sesion </Button>
    </div>
    )
  }
}
