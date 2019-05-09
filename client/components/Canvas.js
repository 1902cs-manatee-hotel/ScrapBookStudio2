import React, {Component} from 'react'
import {Stage, Layer, Text} from 'react-konva'
import Toolbar from './Toolbar'
import { getPageContentThunk } from '../store/content'
import { connect, ReactReduxContext, Provider } from 'react-redux';
import CanvasMedia from './CanvasMedia'
import CanvasText from './CanvasText'

class Canvas extends Component {

  componentDidMount() {
    // this.props.getPageContent() get from state
  }

  render() {
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
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
            <Provider store={store}>
              <Layer>
                {this.props.allText.map((text) => {
                  return <CanvasText key={text.id}
                  content={text.content}
                  x_coord={text.x_coord}
                  y_coord={text.y_coord}
                  tilt={text.tilt}
                  color={text.color}
                  size={text.size}
                  id={text.id}
                  />
                })}
                {
                  this.props.allMedia.map((media)=> {
                    return <CanvasMedia 
                    key={media.id}
                    src={media.path}
                    x={media.x_coord}
                    y={media.y_coord}
                    width={media.width}
                    height={media.height}
                    tilt={media.tilt}
                    filter={media.filter}                    
                    />
                  })
                }
              </Layer>
              </Provider>
            </Stage>
          </div>
        </div>
      </div>
        )
      }
      </ReactReduxContext.Consumer>
    )
  }
}

const mapState = (state) => {
  return {
    allText: state.content.allText,
    allMedia: state.content.allMedia
  }
}

const mapDispatch = (dispatch) => {
  return {
    getPageContent: (pageId) => dispatch(getPageContentThunk(pageId))
  }
}

export default connect(mapState, mapDispatch)(Canvas)
