import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbooksThunk } from '../store/scrapbooks'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class UserHome extends Component {


  render() {
    return (
      <div className='centered-forms title'>
        <h2>Welcome Back {this.props.user.firstName} !</h2>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    scrapbooks: state.scrapbooks.scrapbooks,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchScrapBooks: () => {
    dispatch(getAllScrapbooksThunk())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
