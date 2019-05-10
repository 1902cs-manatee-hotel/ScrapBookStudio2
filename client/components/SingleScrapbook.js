import React, {Component} from 'react'
// import { getAllPagesThunk } from '../store/scrapbooks'
import {connect, ReactReduxContext, Provider} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPageContentThunk} from '../store/content'
import {Stage, Layer} from 'react-konva'
import CanvasMedia from './CanvasMedia'
import CanvasText from './CanvasText'
import MediaResizer from './MediaResizer'

class SingleScrapbook extends Component {
  componentDidMount() {
    // this.props.getAllPages()
    this.props.getPageContent(7)
  }

  render() {
    console.log('SSSSSSS', this.props)
    return (
      <div>
        <h1 className="title">My Scrapbook Title</h1>
        MAP SCRAPBOOK PAGES:
        <br />
        {this.props.pages.map(page => {
          return (
            <div key={page.id}>
              <Link to={`/scrapbooks/${page.id}`} />
              <br />

              <ReactReduxContext.Consumer>
        {({ store }) => (
            <Stage
              className="box"
              width={1300}
              height={500}
            >
            <Provider store={store}>
              <Layer>
                {this.props.allText.map((text) => {
                  return <CanvasText
                  key={text.id}
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
                <MediaResizer />
              </Layer>
              </Provider>
            </Stage>
        )
      }
      </ReactReduxContext.Consumer>
              <img width="120px" height="120px" src={page.image} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pages: state.scrapbooks.pages
  }
}

const mapDispatchToProps = dispatch => ({
  // getAllPages: () => dispatch(getAllPagesThunk())
  getPageContent: () => dispatch(getPageContentThunk(7))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleScrapbook)
