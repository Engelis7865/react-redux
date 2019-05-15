import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './login.css'

export default class Login extends Component {

    state = {
        login: '',
        password: '',
    }


    onChangeInput = event => {
        this.setState({[event.target.id]: event.target.value})
    }
    onSubmitForm = () => {
        if(this.state.login == '' || this.state.password == ''){
            alert('не заполнено одно из полей')
        }        
        else if (this.state.login === "admin" && this.state.password === "12345") {
            localStorage.setItem("isAuth", true);
            this.props.onLoginUser(this.state.login);
            this.props.history.push("/profile");
        }
        else alert('не верное имя пользователя или пароль')
    };

    preventDefault = event => {
        event.preventDefault()
    }
    render() {

        let isAuth = localStorage.getItem("isAuth");
        if (isAuth === "true") {
            if (this.props.hasOwnProperty('onLoginUser')) {
                this.props.onLoginUser();
            }
            return <Redirect to="/profile" />
        }
        return (
            <form onSubmit={this.preventDefault}>
                <div className='login'>
                    <input id="login" type='text' placeholder="Логин" value={this.state.login} onChange={this.onChangeInput} />
                    <input id="password" type="password" placeholder="Пароль" value={this.state.password} onChange={this.onChangeInput} />
                    <button onClick={this.onSubmitForm} className='clickLog'>Log in</button>
                </div>
            </form>
        )
    }

}
