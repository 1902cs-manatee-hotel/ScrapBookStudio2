import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllScrapbooksThunk, getAllPagesThunk} from '../store/scrapbooks'
import {Link} from 'react-router-dom'
import ScrapbookCard from './ScrapbookCard'

/**
 * COMPONENT
 */

class Library extends Component {
  componentDidMount() {
    this.props.fetchScrapBooks(this.props.user.id)
  }

  render() {
    return (
      <div
        className="box form centered-forms has-text-centered"
        id="library-outer-container"
      >
        <h2 className="title">{this.props.user.firstName}'s Scrapbooks</h2>
        <div id="library-container">
          {this.props.scrapbooks.map(book => {
            return (
              <div className="box" key={book.id}>
                <Link to={`/scrapbooks/${book.name}/${book.id}`}>
                  <ScrapbookCard book={book} />
                </Link>
              </div>
            )
          })}
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
  fetchScrapBooks: userId => {
    dispatch(getAllScrapbooksThunk(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)
