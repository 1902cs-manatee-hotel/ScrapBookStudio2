import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  if (name === 'signup') {

  return (
    <div className="login-background">
      <form className="box centered-forms login-form" onSubmit={handleSubmit} name={name}>
        <div className="field">
          <label className="label" htmlFor="email">
            <small>Email</small>
          </label>
          <input className="input" name="email" type="text" />
        </div>
        <br />
        <div className="field">
          <label className="label" htmlFor="password">
            <small>Password</small>
          </label>
          <input className="input" name="password" type="password" />
        </div>
        <br />
        <div>
        <div className="field">
          <label className="label" htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input className="input" name="firstName" type="text" />
        </div>
        <div className="field">
          <label className="label" htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input className="input" name="lastName" type="text" />
        </div>
        </div>
        <br />
        <div>
        {/* <Link to="/signup"> */}
          <button className="button is-warning" type="submit">{displayName}</button>
        {/* Sign Up */}
        {/* </Link> */}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <br />
      {/* <a href="/auth/google">{displayName} with Google</a> */}
      </form>
    </div>
  )
  } else {
    return (
      <div className="login-background">
      <form className="box centered-forms login-form" onSubmit={handleSubmit} name={name}>
        <div className="field">
          <label className="label" htmlFor="email">
            <small>Email</small>
          </label>
          <input className="input" name="email" type="text" />
        </div>
        <br />
        <div className="field">
          <label className="label" htmlFor="password">
            <small>Password</small>
          </label>
          <input className="input" name="password" type="password" />
        </div>
        <br />
        <div>
          <button className="button is-success" type="submit">{displayName}</button>
        </div>
        <br />
        <div>
        <Link to="/signup">
        <button className="button is-warning" type="submit">Sign Up</button>
        {/* Sign Up */}
        </Link>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <br />
      {/* <a href="/auth/google">{displayName} with Google</a> */}
      </form>
    </div>
    )

  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchLogIn = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

const mapDispatchSignUp = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, firstName, lastName))
    }
  }
}



export const Login = connect(mapLogin, mapDispatchLogIn)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
