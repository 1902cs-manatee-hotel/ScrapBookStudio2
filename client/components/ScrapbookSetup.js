import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ScrapbookSetup extends Component {
    render() {
        return (
            <div className="box centered-forms">
                <h1 className="title">User's Scrapbook Title</h1>
                <Link to='/canvas'>
                <button className="button is-primary space" type="submit">Add Page</button>
                </Link>
                <br/>
                <Link to='/addcontributorform'>
                    <button className="button is-primary space" type="submit">Add Contributor</button>
                </Link>
            </div>
        )
    }
}

export default ScrapbookSetup