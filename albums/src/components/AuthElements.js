import React from 'react'

import Button from '@material-ui/core/Button';
import {Avatar, withStyles, IconButton, Icon} from '@material-ui/core'
import {ExitToApp} from '@material-ui/icons'

const AuthElements = function(props){
    const logInButton = ()=>{
        if(props.user) return (
           [<Avatar src={props.user.providerData[0].photoURL}/>,(<IconButton color='inherit' onClick={props.logout}><ExitToApp/></IconButton>)]);
           
        return  (<Button variant='contained' onClick={props.login}>Iniciar Sesion</Button>)
    }
    return (
    <div className={props.classes.container}>
       {/* Un metodo para deshabilitar el boton inicio sesion si estas logged 
       {!this.state.userLoggedIn && <Button variant='contained'
        onClick={this.login}>Iniciar Sesion</Button>} */}
        {logInButton()}
        
    </div>
    )
  }

  export default  withStyles({
        container:{
            display: 'flex',
            flexDirection: 'row'
        }
    })(AuthElements)



