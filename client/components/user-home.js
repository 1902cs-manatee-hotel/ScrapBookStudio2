import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbooksThunk } from '../store/scrapbooks'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class UserHome extends Component {
  componentDidMount() {
    this.props.fetchScrapBooks()
  }

  render() {
    return (
      <div className='centered-forms title'>
        <h2>Welcome Back {this.props.user.firstName} !</h2>
        {
          this.props.scrapbooks.map(book => {
            return (
              <div key={book.id}>
                <Link to={`/scrapbooks/${book.id}`}>{book.name}</Link>
                <br />
                <img  width='120px' height="120px" src={book.image}></img>
              </div>
            )
          })
        }
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('tE', state)
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

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
