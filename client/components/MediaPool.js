import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbookMediaThunk } from '../store/scrapbooks'
import { createSingleMediaThunk } from '../store/content';
import MediaPoolItem from './MediaPoolItem';

class MediaPool extends Component {

  componentDidMount() {
    this.props.fetchAllMedia(this.props.currentScrapbook)
  }

  // handleMountClick = (path) => {
  //   console.log('PATH', path)
  //   this.props.mountToCanvas(path)
  // }

  render() {
      // console.log('PROPS from MediaPool*****', this.props)

    return (
      <div className="box"  >
        {
          this.props.allMedia.map(media => {
            return (
              <MediaPoolItem id={media.id} path={media.path} scrapbookId={this.props.currentScrapbook} pageId={this.props.singlePage} />
            )
            // return (
            //   <div key={media.id}>
            //     <br />
            //     <button type="submit" onClick={this.handleMountClick(media.path)} >Add</button>
            //     <img  width='120px' height="120px" src={media.path}></img>
            //   </div>
            // )
          })
        }
      </div>
    )
  }
}

const mapState = state => {
    return {
        allMedia: state.scrapbooks.allScrapbookMedia,
        currentScrapbook: state.scrapbooks.singleScrapbook,
        singlePage: state.scrapbooks.singlePage
  }
}

const mapDispatch = dispatch => ({
    fetchAllMedia: (id) => dispatch(getAllScrapbookMediaThunk(id))
  })

export default connect(mapState, mapDispatch)(MediaPool)
