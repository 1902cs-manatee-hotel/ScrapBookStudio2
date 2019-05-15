import React, {Component} from 'react'
import {Stage, Layer, Text, Rect} from 'react-konva'
import {getPageContentThunk, deselectCanvasElement} from '../store/content'
import {connect, ReactReduxContext, Provider} from 'react-redux'
import {Link} from 'react-router-dom'
import CanvasMedia from './CanvasMedia'
import CanvasText from './CanvasText'
import {
  createSinglePageThunk,
  setNextAndPrevious,
  getAllPagesThunk,
  increasePageIndex,
  decreasePageIndex,
  setPageIndex,
  getSinglePage,
  getSingleScrapbook
} from '../store/scrapbooks'
import MediaResizer from './MediaResizer'

class Canvas extends Component {
  async componentDidMount() {
    await this.props.getAllPages(this.props.match.params.scrapbookid)
    await this.props.getPageContent(this.props.match.params.pageid)
    await this.props.setPageIndex(this.props.match.params.pageid)
    await this.props.setSingleScrapbook(this.props.match.params.scrapbookid)
    this.props.setSinglePage(this.props.match.params.pageid)
    this.props.setNextAndPrevious()
  }

  render() {
    return (
      <ReactReduxContext.Consumer>
        {({store}) => (
          <div className="tile is-ancestor canvas">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <Stage
                  style={{
                    backgroundImage:
                      'url(http://mikekurtzplumbing.com/wp-content/uploads/parser/hd-nature-wallpaper-1.jpg)'
                  }}
                  className="box"
                  width={1300}
                  height={500}
                  onMouseDown={this.handleStageMouseDown}
                >
                  <Provider store={store}>
                    <Layer>
                      {this.props.allText.map(text => {
                        return (
                          <CanvasText
                            key={text.id}
                            content={text.content}
                            xCoord={text.xCoord}
                            yCoord={text.yCoord}
                            rotation={text.rotation}
                            width={text.width}
                            height={text.height}
                            color={text.color}
                            size={text.size}
                            id={text.id}
                            name={`${text.id}`}
                          />
                        )
                      })}
                      {this.props.allMedia.map(media => {
                        return (
                          <CanvasMedia
                            key={media.id}
                            src={media.path}
                            xCoord={media.xCoord}
                            yCoord={media.yCoord}
                            width={media.width}
                            height={media.height}
                            rotation={media.rotation}
                            filter={media.filter}
                            name={`${media.id}`}
                            id={media.id}
                          />
                        )
                      })}
                    </Layer>
                  </Provider>
                </Stage>
              </div>
              <div>
                {this.props.currentPageIndex !== 0 ? (
                  <Link
                    onClick={this.handleOnClickPrevious}
                    to={`/canvas/${this.props.match.params.scrapbookid}/${
                      this.props.previousPage
                    }`}
                  >
                    <button
                      className="button is-primary space space-button"
                      type="submit"
                    >
                      Previous
                    </button>
                  </Link>
                ) : null}
                {this.props.currentPageIndex <
                this.props.allPages.length - 1 ? (
                  <Link
                    onClick={this.handleOnClickNext}
                    to={`/canvas/${this.props.match.params.scrapbookid}/${
                      this.props.nextPage
                    }`}
                  >
                    <button
                      className="button is-primary space space-button"
                      type="submit"
                    >
                      Next
                    </button>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </ReactReduxContext.Consumer>
    )
  }
}

const mapState = state => {
  return {
    allText: state.content.allText,
    allMedia: state.content.allMedia,
    editorText: state.content.editorText,
    singlePage: state.scrapbooks.singlePage,
    nextPage: state.scrapbooks.nextPage,
    previousPage: state.scrapbooks.previousPage,
    currentPageIndex: state.scrapbooks.currentPageIndex,
    allPages: state.scrapbooks.pages
  }
}

const mapDispatch = dispatch => {
  return {
    getPageContent: pageId => dispatch(getPageContentThunk(pageId)),
    addPage: scrapbookId => dispatch(createSinglePageThunk(scrapbookId)),
    deselectCanvasElement: () => dispatch(deselectCanvasElement()),
    setNextAndPrevious: () => dispatch(setNextAndPrevious()),
    getAllPages: id => dispatch(getAllPagesThunk(id)),
    increasePageIndex: () => dispatch(increasePageIndex()),
    decreasePageIndex: () => dispatch(decreasePageIndex()),
    setPageIndex: pageId => dispatch(setPageIndex(pageId)),
    setSinglePage: pageId => dispatch(getSinglePage(pageId)),
    setSingleScrapbook: scrapbookId => dispatch(getSingleScrapbook(scrapbookId))
  }
}

export default connect(mapState, mapDispatch)(Canvas)
