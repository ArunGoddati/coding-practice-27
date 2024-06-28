import {Component} from 'react'
import './index.css'
class LoginForm extends Component {
  state = {username: '', password: '', userFound: true}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginForm = async event => {
    event.preventDefault()
    const {username, password, userFound} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        userFound: false,
      })
    }
  }

  userNameInputElement = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passwordInputElement = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, userFound} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-big-image"
        />
        <div>
          <form onSubmit={this.loginForm} className="form-container">
            <label className="label-text" htmlFor="inputUserName">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input-element"
              onChange={this.userNameInputElement}
              id="inputUserName"
            />
            <label className="label-text" htmlFor="inputPassword">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input-element"
              onChange={this.passwordInputElement}
              id="inputPassword"
            />
            <button className="login-button">Login</button>
            {userFound ? (
              ''
            ) : (
              <p className="failed-paragraph">*Username is not found</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
