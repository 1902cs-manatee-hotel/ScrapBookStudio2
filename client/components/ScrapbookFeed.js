import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteScrapbookThunk } from '../store/scrapbooks'

/**
 * COMPONENT
 */


class ScrapBookFeed extends Component {
  componentDidMount() {
    
  }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapState, mapDispatchToProps)(ScrapBookFeed)



