import React, {Component} from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react'

class ImageUpload extends Component {
    constructor() {
        super()
        this.uploadImage = this.uploadImage.bind(this)
    }

    uploadImage() {
        var myWidget = cloudinary.createUploadWidget({
            cloudName: 'dv7hoa5iv', 
            uploadPreset: 'my_preset'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
              }
            }
          )
          myWidget.open()
    }

    render() {
        return (
            <div>
                <button className='button is-warning space' type='submit' onClick={this.uploadImage}>Image</button>
            </div>
        )
    }
}

export default ImageUpload
