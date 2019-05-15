import React, {Component} from 'react'
import {connect} from 'react-redux'
import { createSingleMediaThunk } from '../store/content';

 class MediaPoolItem extends Component {
     constructor(props) {
         super(props)

         this.handleMountClick = this.handleMountClick.bind(this)
     }

  handleMountClick() {
      // console.log('props from MediaPoolItem', this.props)
        this.props.mountToCanvas({path: this.props.path,
            scrapbookId: this.props.scrapbookId,
            pageId: this.props.pageId
        })
      }
    
  render() {
      // console.log('**&props****', this.props)
      return (
              <div>
                <br />
                <img onClick={() => this.handleMountClick()} width='120px' height="120px" src={this.props.path}></img>
              </div>
            )
  }
}

const mapDispatch = (dispatch) => ({
    mountToCanvas: (path) => dispatch(createSingleMediaThunk(path)),
})

export default connect(null, mapDispatch)(MediaPoolItem)
