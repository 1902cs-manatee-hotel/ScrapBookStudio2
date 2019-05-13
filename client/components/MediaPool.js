import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbookMediaThunk } from '../store/scrapbooks'
import { createSingleMediaThunk } from '../store/content';



class MediaPool extends Component {
  componentDidMount() {
      this.props.fetchAllMedia(this.props.scrapbookId)
  }  

  handleClick = () => {
    this.props.mountToCanvas()
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
                <img  onClick={this.handleClick} width='120px' height="120px" src={media.path}></img>

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
    fetchAllMedia: (id) => dispatch(getAllScrapbookMediaThunk(id)),
    mountToCanvas: () => dispatch(createSingleMediaThunk()),
  })

export default connect(mapState, mapDispatch)(MediaPool)
