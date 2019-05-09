import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { createScrapbookThunk } from '../store/scrapbooks'

class Create extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    handleSubmit(event) {
      event.preventDefault();
        console.log('inside handleSumbit')
      this.props.createScrapbook({title: this.state.title,
                                description: this.state.description
    })
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        console.log('Create Comp', this.props)
        return (
            <div className="box form centered-forms">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="input" name="title" type="text" placeholder="Enter  title" onChange={this.handleSubmit} value={this.state.title}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input className="input" name="description" type="text" placeholder="Enter a description (optional)" onChange={this.handleDescChange} value={this.state.description}/>
                    </div>
                </div>
                <Link to="/scrapbooksetup">
                    <button className="button is-primary" type="submit">Create Scrapbook</button>
                </Link>
                </form>
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

