import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { createSinglePageThunk } from '../store/scrapbooks'

class ScrapbookSetup extends Component {
    constructor() {
      super()

      this.handlePageSubmit = this.handlePageSubmit.bind(this)
    }


    handlePageSubmit() {
        this.props.addPage()
    }

    render() {
        return (
            <div className="box centered-forms">
                <h1 className="title">User's Scrapbook Title</h1>
                <Link to='/canvas'>
                <button className="button is-primary space" onClick={this.handlePageSubmit} type="submit">Add Page</button>
                </Link>
                <br/>
                <Link to='/addcontributorform'>
                    <button className="button is-primary space" onClick={this.handleContriSubmit} type="submit">Add Contributor</button>
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPage: () => dispatch(createSinglePageThunk())
})

export default connect(null, mapDispatchToProps)(ScrapbookSetup)