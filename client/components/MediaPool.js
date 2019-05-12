import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbookMediaThunk } from '../store/scrapbooks'

class MediaPool extends Component {
  componentDidMount() {
      this.props.fetchAllMedia(this.props.scrapbookId)
  }  

  render() {
      console.log('PROPS', this.props)
    return (
      <div className="box">
        <h3>Media Pool</h3>
        {
          this.props.allMedia.map(media => {
            return (
              <div key={media.id}>
                <br />
                <img  width='120px' height="120px" src={media.path}></img>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => {
    return {
        allMedia: state.scrapbooks.allScrapbookMedia
    }
  }

const mapDispatch = dispatch => ({
    fetchAllMedia: (id) => dispatch(getAllScrapbookMediaThunk(id))
  })

export default connect(mapState, mapDispatch)(MediaPool)
