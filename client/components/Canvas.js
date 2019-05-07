import React, {Component} from 'react'
import {Stage, Layer, Text} from 'react-konva'
import Toolbar from './Toolbar'
import { getAllTextThunk } from '../store/content'
import { connect } from 'react-redux';

class Canvas extends Component {
  componentDidMount() {
    this.props.getAllText()
  }

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
                {this.props.allText.map((text) => {
                  return <Text key={text.id}
                  content={text.content}
                  x_coord={text.x_coord}
                  y_coord={text.y_coord}
                  tilt={text.tilt}
                  color={text.color}
                  size={text.size}
                  />
                })}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    allText: state.content.allText
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllText: () => dispatch(getAllTextThunk())
  }
}

export default connect(mapState, mapDispatch)(Canvas)
