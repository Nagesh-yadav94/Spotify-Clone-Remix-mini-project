import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value, errMsg: ''})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, errMsg: ''})
  }

  authorizeUserVerificatin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const loginOption = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, loginOption)
    const loginData = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', loginData.jwt_token, {expires: 30, path: '/'})
      this.setState({username: '', password: '', errMsg: ''})

      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errMsg: loginData.error_msg})
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state

    return (
      <div className="input-card" data-testid="inputCard">
        <lable htmlFor="username" className="label">
          USERNAME
        </lable>
        <input
          id="username"
          className="input"
          type="text"
          value={username}
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="input-card" data-testid="inputCard">
        <lable className="label" htmlFor="password">
          PASSWORD
        </lable>
        <input
          className="input"
          id="password"
          type="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  renderLoginForm = () => {
    const {errMsg} = this.state

    return (
      <form
        className="form"
        data-testid="form"
        onSubmit={this.authorizeUserVerificatin}
        id="loginForm"
      >
        {this.renderUsernameInput()}
        {this.renderPassword()}
        <button type="submit" className="login-btn">
          Login
        </button>
        {errMsg.length && (
          <p className="error-msg" data-testid="errorMsg">
            *{errMsg}
          </p>
        )}
      </form>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form" data-testid="loginForm">
        <div className="inner-form-container">
          <div className="app-card-container">
            <img
              className="app-logo"
              src="https://i.ibb.co/zZMYBmH/music.png"
              alt="website logo"
            />
            <h2 className="app-name">Spotify Remix</h2>
          </div>
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default LoginPage
