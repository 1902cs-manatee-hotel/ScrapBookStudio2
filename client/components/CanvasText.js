import React, {Component} from 'react'
import {Text} from 'react-konva'
import {connect} from 'react-redux'
import {deleteSingleTextThunk, getSingleText, updateSingleTextThunk} from '../store/content'

class CanvasText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      fill: 'black'
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.props.selectText(this.props.id)
  }

  handleOnDragEnd = (event) => {
    this.props.updateText(this.props.id, {
      xCoord: event.target.x(),
      yCoord: event.target.y(),
      size: this.state.size
    })
  }

  // handleOnDragStart = () => {
  //   this.setState({
  //     fill: 'green'
  //   })
  // }

  render() {
    return (
      <Text
        draggable
        text={this.props.content}
        x={this.props.xCoord}
        y={this.props.yCoord}
        fontSize={this.props.size}
        fontFamily='Dekko, cursive'
        // fill={this.state.isDragging || this.props.selected === this.props.id ? 'green' : 'black'}
        // onDragStart={() => {
        //   this.setState({
        //     isDragging: true
        //   })
        // }}
        onDragEnd={this.handleOnDragEnd}
        onClick={this.handleOnClick}
      />
    )
  }
}

const mapState = (state) => {
  return {
    editorText: state.content.editorText,
    selected: state.content.selectedText,
    // xCoord: state.currentText.xCoord,
    // yCoord: state.currentText.yCoord,
    // content: state.currentText.content,
    // size: state.currentText.size
  }
}

const mapDispatch = dispatch => {
  return {
    delete: id => dispatch(deleteSingleTextThunk(id)),
    selectText: id => dispatch(getSingleText(id)),
    updateText: (id, updatedProp) => dispatch(updateSingleTextThunk(id, updatedProp))
  }
}

export default connect(mapState, mapDispatch)(CanvasText)
