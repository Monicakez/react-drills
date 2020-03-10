import React, { Component } from 'react';


class Login extends Component {
    constructor(){
        super(); 

        this.state = {
            username: "", 
            password: ""
        }

        this.onLogin = this.onLogin.bind(this)
    }

    updateUsername(name) {
        this.setState({username: name})
    }

    updatePassword(pass) {
        this.setState({password: pass})
    }

    onLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render(){
        return (
            <div>
                <input onChange={e => this.updateUsername(e.target.value)} type="text"/>
                <input onChange={e => this.updatePassword(e.target.value)} type="text"/>
                <button onClick={this.onLogin}>Login</button>
            </div>
        )
    }



}

export default Login; 