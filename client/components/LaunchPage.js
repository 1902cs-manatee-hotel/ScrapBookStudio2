import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const LaunchPage = ({isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div style={{backgroundImage: 'none'}}>{/* Background image & site info for login page will not show when logged in */}</div>
    ) : (
      <div className="launch-page">
        <h1 className="login-header">Scrapbook Studio</h1>
        <p className="site-description">
          A web-based application that allows users to create, <br /> view, and collaborate on the scrapbooking experience.
        </p>
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

export default connect(mapState, null)(LaunchPage)

/**
 * PROP TYPES
 */
LaunchPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
