import React, {Component} from 'react'
import TextEditor from './TextEditor'
import MediaUpload from './MediaUpload'
import MediaPool from './MediaPool'

class Toolbar extends Component {

  render() {
    // console.log('TOOLBAR SCRAPBOOK ID:', this.props.match.params.scrapbookid)
    return (
      <div className="box toolbar">
        <h1 className="title">Toolbar</h1>
        <MediaUpload />
        <button className='button is-primary space' type='submit'>Text</button>
        <br/>
        <button className='button is-primary space' type='submit'>Background</button>
        <TextEditor />
        <br />
        <br />
        <MediaPool scrapbookId={this.props.scrapbookId}/>
        {/* <Link>Previous</Link>
        <Link to={}>Next</Link> */}
      </div>
    )
  }
}

export default Toolbar
