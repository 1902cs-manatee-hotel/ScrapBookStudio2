import React, {Component} from 'react'
import {Image} from 'react-konva'
import useImage from 'use-image'
import {connect} from 'react-redux'
import { updateSingleMediaThunk } from '../store/content';

class CanvasMedia extends Component {
  constructor(props) {
    super(props)
    this.state = {
        image: null,
        x: this.props.x,
        y: this.props.y,
        width: this.props.width,
        height: this.props.height,
        rotation: this.props.rotation,
      };
  }
      componentDidMount() {
        this.loadImage();
      }
      componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
          this.loadImage();
        }
      }
      componentWillUnmount() {
        this.image.removeEventListener('load', this.handleLoad);
      }
      loadImage() {
        // save to "this" to remove "load" handler on unmount
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
      }
      handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
          image: this.image
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        // this.imageNode.getLayer().batchDraw();
      };
      render() {
        return (
          <Image
            x={this.state.x}
            y={this.state.y}
            scaleX={this.state.width}
            scaleY={this.state.height}
            rotation={this.state.rotation}
            image={this.state.image}
            ref={node => {
              this.imageNode = node;
            }}
            name={this.props.name}
            draggable
            onDragStart={() => {
              this.setState({
              })
            }}
            onDragEnd={(event) => {
              this.setState({
                x: event.target.x(),
                y: event.target.y(),
                width: event.target.scaleX(),
                height: event.target.scaleY(),
                rotation: event.target.rotation(),
              })
              this.props.updateMedia(this.props.id, {
                  x_coord: this.state.x,
                  y_coord: this.state.y,
                  width: this.state.width,
                  height: this.state.height,
                  rotation: this.state.rotation
              })
            }}
          />
        );
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMedia: (id, updatedProp) => dispatch(updateSingleMediaThunk(id, updatedProp))
  }
}

export default connect(null, mapDispatchToProps)(CanvasMedia)
// export default CanvasMedia