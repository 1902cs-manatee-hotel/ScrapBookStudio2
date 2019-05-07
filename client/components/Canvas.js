import React, {Component} from 'react'
import {Stage, Layer, Text} from 'react-konva'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'
import Toolbar from './Toolbar'

class Canvas extends Component {
  render() {
    return (
      <div className="tile is-ancestor canvas">
        <div className="tile">
          <Toolbar />
        </div>
        <div className="tile is-parent is-vertical">
          <div className='tile is-child'>
            <button className="button is-primary is-fullwidth add-page-button" type='submit'>Add Page</button>
          </div>
          <div className='tile is-child'>
            <Stage
              className="box"
              width={1300}
              height={500}
            >
              <Layer>
                <Text />
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    )
  }
}

export default Canvas
