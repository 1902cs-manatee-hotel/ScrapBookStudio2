import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { createScrapbookThunk } from '../store/scrapbooks'

class Create extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleSubmit() {
    //   event.preventDefault();
      this.props.createScrapbook({name: this.state.name,
                                description: this.state.description
    })
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleDescChange(event) {

        this.setState({
            description: event.target.value
        })
    }

    render() {
        return (
            <div className="box form centered-forms">
                <div className="field">
                    <div className="control">
                        <input className="input" name="name" type="text" placeholder="Title (required)" onChange={this.handleNameChange} value={this.state.name}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" name="description" type="text" placeholder="Description (required)" onChange={this.handleDescChange} value={this.state.description}/>
                    </div>
                </div>
                <Link to="/userinvite">
                    <button disabled={!(this.state.name && this.state.description)} className="button is-primary" onClick={this.handleSubmit} type="submit">Create Scrapbook</button>
                </Link>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

//   });

const mapDispatch = dispatch => ({
    createScrapbook: (setProps) => dispatch(createScrapbookThunk(setProps))
  })


  export default connect(null, mapDispatch)(Create)

