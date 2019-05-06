import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AddContributorForm extends Component {
    render() {
        return (
            <div className="box form centered-forms">
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Enter an email address" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Enter a contributor's name" />
                </div>
            </div>
            <Link to="/scrapbooksetup">
                <button className="button is-primary" type="submit">Add Contributor</button>
            </Link>
        </div>   
        )
    }
}

export default AddContributorForm