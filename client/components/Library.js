import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbooksThunk, getAllPagesThunk } from '../store/scrapbooks'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

class Library extends Component {
  componentDidMount() {
    this.props.fetchScrapBooks(this.props.user.id)
  }

  render() {
    console.log('PROPS:',this.props)
    return (
      <div className='centered-forms title'>
        <h2>{this.props.user.firstName}'s Scrapbooks</h2>
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
const mapStateToProps = state => {
  return {
    scrapbooks: state.scrapbooks.scrapbooks,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchScrapBooks: (userId) => {
    dispatch(getAllScrapbooksThunk(userId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
