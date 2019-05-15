import React, {Component} from 'react'
import {connect} from 'react-redux'
import {cloud_name, api_key, upload_preset} from './config/cloudinary'
import {createSingleCloudMediaThunk} from '../store/content'

class MediaUpload extends Component {
    constructor() {
        super()
        this.uploadMedia = this.uploadMedia.bind(this)
    }

    uploadMedia() {
        var myWidget = cloudinary.createUploadWidget({
            cloudName: cloud_name,
            api_key: api_key,
            uploadPreset: upload_preset}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info);
                console.log('CLICK HERE:', result.info.secure_url);
                let path = result.info.secure_url
                console.log("****CLOUD RESULT", path )
                this.props.postMedia({path: path, scrapbookId: this.props.currentScrapbook, pageId: this.props.singlePage })
              }
            }
          )
          myWidget.open()
    }

    render() {
        return (
            <div>
                <button className='button is-primary space' type='submit' onClick={this.uploadMedia}>Image</button>
            </div>
        )
    }
}

const mapState = state => {
    return {
        currentScrapbook: state.scrapbooks.singleScrapbook,
        singlePage: state.scrapbooks.singlePage
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMedia: (imageUrl) => dispatch(createSingleCloudMediaThunk(imageUrl))
    }
}

export default connect(mapState, mapDispatchToProps)(MediaUpload)
