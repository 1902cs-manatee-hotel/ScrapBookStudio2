import React, {Component} from 'react'
import TextEditor from './TextEditor'
import MediaUpload from './MediaUpload'
import MediaPool from './MediaPool'

class Toolbar extends Component {
  constructor() {
    super()
    this.state = {
      revealMediaPool: false
    }
  }

  handleClick = () => {
    return this.setState({
      revealMediaPool: !this.state.revealMediaPool
    })
  }

  render() {
    // console.log('TOOLBAR SCRAPBOOK ID:', this.props.match.params.scrapbookid)
    return (
      <div className="box toolbar">
        <h1 className="title">Toolbar</h1>
        <MediaUpload />
        <br/>
        {/* <button className='button is-primary space' type='submit'>Background</button> */}
        <TextEditor />
        <br />
        <br />
        <button className='button is-primary space space-button' onClick={this.handleClick}>Media Pool</button>
        {this.state.revealMediaPool ? <MediaPool scrapbookId={this.props.scrapbookId}/> : null}
        {/* <Link>Previous</Link>
        <Link to={}>Next</Link> */}
      </div>
    )
  }
}

export default Toolbar
