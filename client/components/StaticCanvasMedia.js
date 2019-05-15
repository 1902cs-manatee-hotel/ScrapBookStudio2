import React, {Component, Fragment} from 'react'
import {Image} from 'react-konva'
import useImage from 'use-image'
import {connect} from 'react-redux'
import { updateSingleMediaThunk, getSingleMedia } from '../store/content';
import { updateCurrentMediaThunk } from '../store/currentMedia';

class StaticCanvasMedia extends Component {
  constructor(props) {
    super(props)
    this.state = {
        image: null
      };
      // this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
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
        // save to "this" to remove "load" handler on unmount/////
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
      }
      handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer/////
        // because "image" property is changed/////
        this.setState({
          image: this.image
        });
        // if you keep same image object during source updates/////
        // you will have to update layer manually://///
        // this.imageNode.getLayer().batchDraw();/////
      };

      // handleOnDragMove = (event) => {
      //   if(this.props.id === this.props.selectedMedia){
      //     this.props.updateMediaOnDrag({
      //       xCoord: event.target.x(),
      //       yCoord: event.target.y(),
      //       width: event.target.scaleX(),
      //       height: event.target.scaleY(),
      //       rotation: event.target.rotation(),
      //     })
      //   }
      // }

      // handleOnDragEnd (event) {
      //   console.log('target x:', event.target.x())
      //   console.log('target y:', event.target.y())
      //   console.log('target scale-x:', event.target.scaleX())
      //   console.log('target scale-y:', event.target.scaleY())
      //   console.log('rotation:', event.target.rotation())


      //   this.props.updateMedia(this.props.id, {
      //     xCoord: event.target.x(),
      //     yCoord: event.target.y(),
      //     width: event.target.scaleX(),
      //     height: event.target.scaleY(),
      //     rotation: event.target.rotation()
      // })
      // }

      // handleOnMouseOver = (event) => {
      //   console.log('ID in handleMouseOver:', this.props.id)
      //   this.props.setSelectedMedia(this.props.id)
      //   this.props.updateMediaOnDrag({
      //     xCoord: event.target.x(),
      //     yCoord: event.target.y(),
      //     width: event.target.scaleX(),
      //     height: event.target.scaleY(),
      //     rotation: event.target.rotation(),
      //   })
      // }

      render() {
        return (
          <Fragment>
            {/* {this.props.id === this.props.selectedMedia ?
         <Image
         x={this.props.xCoordCurrent}
         y={this.props.yCoordCurrent}
         scaleX={this.props.widthCurrent}
         scaleY={this.props.heightCurrent}
         rotation={this.props.rotationCurrent}
         image={this.state.image}
         ref={node => {
           this.imageNode = node;
         }}
         name={this.props.name}
         draggable
         onMouseOver={this.handleOnMouseOver}
         onDragMove={this.handleOnDragMove}
         onDragEnd={this.handleOnDragEnd}

       /> :
            <Image
            x={this.props.xCoord}
            y={this.props.yCoord}
            scaleX={this.props.width}
            scaleY={this.props.height}
            rotation={this.props.rotation}
            image={this.state.image}
            ref={node => {
              this.imageNode = node;
            }}
            name={this.props.name}
            draggable
            onMouseOver={this.handleOnMouseOver}
            onDragMove={this.handleOnDragMove}
            onDragEnd={this.handleOnDragEnd}
          />
          } */}

          <Image
            x={this.props.xCoord}
            y={this.props.yCoord}
            scaleX={this.props.width}
            scaleY={this.props.height}
            rotation={this.props.rotation}
            image={this.state.image}
            ref={node => {
              this.imageNode = node;
            }}
            name={this.props.name}
            // draggable
            onMouseOver={this.handleOnMouseOver}
            onDragMove={this.handleOnDragMove}
            onDragEnd={this.handleOnDragEnd}
          />
          </Fragment>
        );
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMedia: (id, updatedProp) => dispatch(updateSingleMediaThunk(id, updatedProp)),
    updateMediaOnDrag: (newProps) => dispatch(updateCurrentMediaThunk(newProps)),
    setSelectedMedia: (id) => dispatch(getSingleMedia(id))
  }
}

const mapStateToProps = (state) => {
  return {
  // xCoordCurrent: state.currentMedia.xCoord,
  // yCoordCurrent: state.currentMedia.yCoord,
  // widthCurrent: state.currentMedia.width,
  // heightCurrent: state.currentMedia.height,
  // rotationCurrent: state.currentMedia.rotation,
  selectedMedia: state.content.selectedMedia
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticCanvasMedia)
// export default CanvasMedia
