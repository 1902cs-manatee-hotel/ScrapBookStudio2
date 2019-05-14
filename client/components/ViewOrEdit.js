import React, {Component} from 'react'
import {getAllPagesThunk} from '../store/scrapbooks'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import StaticCanvas from './StaticCanvas'

class ViewOrEdit extends Component {
  componentDidMount() {
    this.props.getAllPages(this.props.match.params.id)
  }

  render() {
    return (
      <div className='has-text-centered centered-forms box'>
        <h1 className="title">Hey There!</h1>
        <h2 className="subtitle">What would you like to do?</h2>
        <br />
        <Link
          to={`/staticcanvas/${this.props.match.params.id}/${
            this.props.singlePage
          }`}
        >
          <button className="button is-primary space-button" type="submit">
            View My Scrapbook
          </button>
        </Link>
        <Link
          to={`/canvas/${this.props.match.params.id}/${this.props.singlePage}`}
        >
          <button className="button is-primary space-button" type="submit">
            Edit My Scrapbook
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pages: state.scrapbooks.pages,
    user: state.user.user,
    singlePage: state.scrapbooks.singlePage
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPages: id => dispatch(getAllPagesThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrEdit)
