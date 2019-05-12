import React, {Component} from 'react'
import { getAllPagesThunk } from '../store/scrapbooks'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import StaticCanvas from './StaticCanvas'

class SingleScrapbook extends Component {
    componentDidMount() {
        this.props.getAllPages(this.props.match.params.id)
    }

    render() {
        console.log('SSSSSSS', this.props.match.params.id)
        return (
            <div>
                <h1 className='title'>Hey There</h1>
                What would you like to do?
                <br />
                <Link>
                  <button type='submit' >View My Scrapbook</button>
                </Link>
                <Link to={`/canvas/${this.props.singlePage}`}>
                  <button type='submit' >Edit My Scrapbook</button>
                </Link>
                {/* {
                  this.props.pages.map(page => {
                    return (
                        <StaticCanvas key={page.id} page={page} />
                      )
                  })
                } */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      pages: state.scrapbooks.pages,
      user: state.user.user,
      singlePage: state.scrapbooks.singlePage
    }
  }

const mapDispatchToProps =  dispatch => ({
    getAllPages: (id) => dispatch(getAllPagesThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleScrapbook)
