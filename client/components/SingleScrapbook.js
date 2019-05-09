import React, {Component} from 'react'
import { getAllPagesThunk } from '../store/scrapbooks' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SingleScrapbook extends Component {
    componentDidMount() {
        this.props.getAllPages()
    }

    render() {
        console.log('SSSSSSS', this.props)
        return (
            <div>
                <h1 className='title'>My Scrapbook Title</h1>
                MAP SCRAPBOOK PAGES:
                <br />
                {
                  this.props.pages.map(page => {
                    return (
                        <div key={page.id}>
                          <Link to={`/scrapbooks/${page.id}`}></Link>
                          <br />
                          <img  width='120px' height="120px" src={page.image}></img>
                        </div>
                      )
                  })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      pages: state.scrapbooks.pages
    }
  }

const mapDispatchToProps =  dispatch => ({
    getAllPages: () => dispatch(getAllPagesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleScrapbook)
