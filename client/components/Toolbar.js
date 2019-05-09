import React, {Component} from 'react'
import TextEditor from './TextEditor'
import MediaUpload from './MediaUpload'

class Toolbar extends Component {
  
  render() {
    return (
      <div className="box toolbar">
        <h1 className="title">Toolbar</h1>
        {/* <MediaUpload /> */}
        <button className='button is-primary space' type='submit'>Text</button>
        <br/>
        <button className='button is-primary space' type='submit'>Background</button>
        <TextEditor />
      </div>
    )
  }
}

export default Toolbar
