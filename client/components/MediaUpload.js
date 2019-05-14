import React, {Component} from 'react'
import {connect} from 'react-redux'
import {cloud_name, api_key, upload_preset} from './config/cloudinary'
import {createSingleMediaThunk} from '../store/content'

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
                this.props.postMedia(path)
              }
            }
          )
          myWidget.open()
    }

    render() {
        return (
            <div>
                <button className='button is-warning space' type='submit' onClick={this.uploadMedia}>Image</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMedia: (imageUrl) => dispatch(createSingleMediaThunk(imageUrl))
    }
}

export default connect(null, mapDispatchToProps)(MediaUpload)
