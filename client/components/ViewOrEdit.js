import React, {Component} from 'react'
import {getAllPagesThunk} from '../store/scrapbooks'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { sendScrapbookThunk } from '../store/user'
// import StaticCanvas from './StaticCanvas'

class ViewOrEdit extends Component {
  constructor(){
    super()
    this.state = {
      sendingScrapbook: false
    }
  }

  componentDidMount() {
    this.props.getAllPages(this.props.match.params.id)
  }

  handleOnClickSendYourScrapbook = () => {
    this.setState({
      sendingScrapbook: true
    })
  }

  handleOnSubmitEmail = (event) => {
    this.props.sendScrapbook(this.props.match.params.id, this.props.singlePage, event.target.email.value)
    this.setState({
      sendingScrapbook: false
    })
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
        <button type="submit" onClick={this.handleOnClickSendYourScrapbook}>Send Your Scrapbook</button>
        {this.state.sendingScrapbook ?
        <div>
          <form method="post" onSubmit={this.handleOnSubmitEmail}>
            <input className="input" name="email" type="email" />
            <button type="submit">Send</button>
          </form>
        </div> :
        null
          }
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
  getAllPages: id => dispatch(getAllPagesThunk(id)),
  sendScrapbook: (scrapbookid, pageid, email) => dispatch(sendScrapbookThunk(scrapbookid, pageid, email))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrEdit)
