import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Tweets from './tweets/tweets';
import profile from './profil/profile';
import Login from './login/login';
import AddTweet from './tweets/Add/AddTweet';


class App extends Component {

  state = {
    login: '',
    isAuth: false
  }

  onLoginUser = (username) => {
    this.setState({
      login: username,
      isAuth: true
    })
  }

  render() {

    if (!this.state.isAuth) {
      if (localStorage.getItem("isAuth") === 'true') {
        this.setState({ ...this.state, isAuth: true});
      }
    }
    
    return (
      <div className='app'>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to='/profile' className='link'>Profile</NavLink>
            </li>
            {this.state.isAuth ? (
              <li>
                <NavLink to='/tweets' className='link'>Tweets</NavLink>
              </li>
            ) : (<></>)}
          </ul>
        </nav>

        <Route path='/' exact component={(props) => <Login {...props} 
          onLoginUser={this.onLoginUser.bind(this)} />} />
        <Route path='/profile' component={profile} />
        <Route path='/tweets' render={(props) => (
          this.state.isAuth ? (
            <Tweets { ...props } />
          ) : (
              <Login {...props} onLoginUser={this.onLoginUser.bind(this)} />
            )
        )} />
        <Route path='/addTweet' render={(props) => (
          this.state.isAuth ? (
            <AddTweet { ...props } />
          ) : (
            <Login {...props} onLoginUser={this.onLoginUser.bind(this)} />
            )
        )} />
      </div>
    )
  }
}

export default App;
