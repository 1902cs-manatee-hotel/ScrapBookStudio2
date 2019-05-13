import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
      {isLoggedIn ? (
    <nav className="navbar">
        <div className="navbar-start">
          {/* The navbar will show these links after you log in */}
          <div className="navbar-start">
            <Link className="navbar-item" to="/home">
              Home
            </Link>
            <Link className="navbar-item" to="/create">
              Create
            </Link>
            <Link className="navbar-item" to="/library">
              Library
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="button" href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        </div>
          </nav>
      ) : (
        <div className="login-page">
          {/* The navbar will show these links before you log in */}
          {/* <Link className='button is-primary' to="/login">Login</Link>
          <Link className='button' to="/signup">Sign Up</Link> */}
        </div>
      )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
