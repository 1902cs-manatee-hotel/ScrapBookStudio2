import React, {Component} from 'react'

class Toolbar extends Component {
  render() {
    return (
      <div className="box toolbar">
        <h1 className="title">Toolbar</h1>
        <button className='button is-primary space' type='submit'>Image</button>
        <br/>
        <button className='button is-primary space' type='submit'>Text</button>
        <br/>
        <button className='button is-primary space' type='submit'>Background</button>
      </div>
    )
  }
}

export default Toolbar
