import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Create extends Component {
    render() {
        return (
            <div className="box form centered-forms">
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter a title" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Enter a description (optional)" />
                    </div>
                </div>
                <Link to="/scrapbooksetup">
                    <button className="button is-primary" type="submit">Create Scrapbook</button>
                </Link>
            </div>
        )
    }
}

export default Create