import React, {Component} from 'react'
import {Text} from 'react-konva'
import {connect} from 'react-redux'
import {deleteSingleTextThunk, getSingleText, updateSingleTextThunk} from '../store/content'

class CanvasText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDragging: false,
      x: this.props.xCoord,
      y: this.props.yCoord,
      content: this.props.content
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.props.selectText(this.props.id)
  }

  render() {
    return (
      <Text
        text={this.state.content}
        x={this.state.x}
        y={this.state.y}
        fill={this.state.isDragging || this.props.selected === this.props.id ? 'green' : 'black'}
        onDragStart={() => {
          this.setState({
            isDragging: true
          })
        }}
        onDragEnd={(event) => {
          this.setState({
            isDragging: false,
            x: event.target.x(),
            y: event.target.y()
          })
          this.props.updateText(this.props.id, {
              xCoord: this.state.x,
              yCoord: this.state.y
          })
        }}
        onClick={this.handleOnClick}
      />
    )
  }
}

// const mapState = state => {
//   return {
//     selected: state.content.selectedText
//   }
// }

const mapState = (state) => {
  return {
    editorText: state.content.editorText,
    selected: state.content.selectedText
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
