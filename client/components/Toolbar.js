import React, {Component} from 'react'
import ImageUpload from './ImageUpload'

class Toolbar extends Component {
  render() {
    return (
      <div className="box toolbar">
        <h1 className="title">Toolbar</h1>
        <ImageUpload />
        <button className='button is-primary space' type='submit'>Text</button>
        <br/>
        <button className='button is-primary space' type='submit'>Background</button>
      </div>
    )
  }
}

export default Toolbar
