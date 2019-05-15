import React, {Component} from 'react'
import {Stage, Layer, Text, Rect} from 'react-konva'
import Toolbar from './Toolbar'
import {getPageContentThunk, deselectCanvasElement } from '../store/content'
import {connect, ReactReduxContext, Provider} from 'react-redux'
import {Link} from 'react-router-dom'
import StaticCanvasMedia from './StaticCanvasMedia'
import StaticCanvasText from './StaticCanvasText'
import {createSinglePageThunk, setNextAndPrevious, getAllPagesThunk, increasePageIndex, decreasePageIndex, setPageIndex, getSingleScrapbook} from '../store/scrapbooks'
import MediaResizer from './MediaResizer'

class Canvas extends Component {
  constructor() {
    super()
    this.handlePageSubmit = this.handlePageSubmit.bind(this)
    this.state = {
      rectangles: [
        {
          x: 10,
          y: 10,
          width: 100,
          height: 100,
          fill: 'red',
          name: 'rect1'
        },
        {
          x: 150,
          y: 150,
          width: 100,
          height: 100,
          fill: 'green',
          name: 'rect2'
        }
      ],
      selectedShapeName: ''
    }
    this.handleOnClickNext = this.handleOnClickNext.bind(this)
    this.handleOnClickPrevious = this.handleOnClickPrevious.bind(this)
  }

  async componentDidMount() {
    await this.props.getAllPages(this.props.match.params.scrapbookid)
    await this.props.getPageContent(this.props.match.params.pageid)
    await this.props.setPageIndex(this.props.match.params.pageid)
    this.props.getSingleScrapbook(this.props.match.params.scrapbookid)
    this.props.setNextAndPrevious()
    // get from state
  }

  handlePageSubmit() {
    this.props.addPage()
  }

  handleStageMouseDown = e => {
    // clicked on stage - cler selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ''
      })
      return
    }
    // clicked on transformer - do nothing
    const clickedOnTransformer =
      e.target.getParent().className === 'Transformer'
    if (clickedOnTransformer) {
      return
    }

    // refactoring code to select image by id
    // find image by id
    const id = e.target.id()
    const image = this.props.allMedia.find(i => i.id === id)
    if(image) {
      if (image) {
        this.setState({
          selectedShapeName: id
        })
      } else {
        this.setState({
          selectedShapeName: ''
        })
      }
    }

    // find clicked rect by its name
    const name = e.target.name()
    const rect = this.state.rectangles.find(r => r.name === name)
    const images = this.props.allMedia
    if (rect || images) {
      this.setState({
        selectedShapeName: name
      })
    } else {
      this.setState({
        selectedShapeName: ''
      })
    }
  }

  //clicking on canvas deselects text and media
  handleOnClickLayer = () => {
    this.props.deselectCanvasElement()
  }

  async handleOnClickNext () {
    await this.props.getAllPages(this.props.match.params.scrapbookid)
    await this.props.getPageContent(this.props.nextPage)
    await this.props.increasePageIndex()
    this.props.setNextAndPrevious()
  }

  async handleOnClickPrevious () {
    await this.props.getAllPages(this.props.match.params.scrapbookid)
    await this.props.getPageContent(this.props.previousPage)
    await this.props.decreasePageIndex()
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
                  className="box"
                  width={1300}
                  height={500}
                  onMouseDown={this.handleStageMouseDown}
                  onClick={this.handleOnClickLayer}
                >
                  <Provider store={store}>
                    <Layer>
                      {this.props.allText.map(text => {
                        return (
                          <StaticCanvasText
                            key={text.id}
                            content={text.content}
                            xCoord={text.xCoord}
                            yCoord={text.yCoord}
                            rotation={text.rotation}
                            color={text.color}
                            size={text.size}
                            id={text.id}
                          />
                        )
                      })}
                      {this.props.allMedia.map(media => {
                        return (
                          <StaticCanvasMedia
                            key={media.id}
                            src={media.path}
                            x={media.xCoord}
                            y={media.yCoord}
                            width={media.width}
                            height={media.height}
                            rotation={media.rotation}
                            filter={media.filter}
                            name='rect'
                          />
                        )
                      })}
                      {this.state.rectangles.map((rect, i) => (
                        <Rectangle key={i} {...rect} />
                      ))}
                    </Layer>
                  </Provider>
                </Stage>
              </div>
              <div>
                {this.props.currentPageIndex !== 0 ? <Link onClick={this.handleOnClickPrevious} to={`/staticcanvas/${this.props.match.params.scrapbookid}/${this.props.previousPage}`}><button className='button is-primary space-button' type='submit'>Previous</button></Link> : null}
                {this.props.currentPageIndex < this.props.allPages.length -1 ? <Link onClick={this.handleOnClickNext} to={`/staticcanvas/${this.props.match.params.scrapbookid}/${this.props.nextPage}`}><button className='button is-primary space-button' type='submit'>Next</button></Link> : null}
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
    getPageContent: (pageId) => dispatch(getPageContentThunk(pageId)),
    addPage: () => dispatch(createSinglePageThunk()),
    deselectCanvasElement: () => dispatch(deselectCanvasElement()),
    setNextAndPrevious: () => dispatch(setNextAndPrevious()),
    getAllPages: (id) => dispatch(getAllPagesThunk(id)),
    increasePageIndex: () => dispatch(increasePageIndex()),
    decreasePageIndex: () => dispatch(decreasePageIndex()),
    setPageIndex: (pageId) => dispatch(setPageIndex(pageId)),
    getSingleScrapbook: (scrapbookid) => dispatch(getSingleScrapbook(scrapbookid))
  }
}

export default connect(mapState, mapDispatch)(Canvas)

class Rectangle extends Component {
  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
        name={this.props.name}
      />
    );
  }
}
