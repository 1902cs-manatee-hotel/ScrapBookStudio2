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
    return (

      <div className="box form centered-forms has-text-centered" id="library-outer-container">
        <h2 className='title'>{this.props.user.firstName}'s Scrapbooks</h2>
        <div id="library-container">
        {
          this.props.scrapbooks.map(book => {
            return (
              <div key={book.id}>
               <button className='button is-primary space' type='submit'> <Link to={`/scrapbooks/${book.name}/${book.id}`}>{book.name}</Link></button>
                <br />
                <img  width='120px' height="120px" src={book.image}></img>
              </div>
            )
          })
        }
        </div>
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
