import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getAllScrapbooksThunk } from '../store/scrapbooks';

class Library extends Component {
    render() {
        return (
        <div className="box">
            <h1 className="title has-text-centered">My Scrapbooks</h1>
            {/* {
                this.props.library.map(
                    (oneLibrary) => {
                        return <SingleScrapbook />
                    }
                )
            } */}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        library: state.scrapbooks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLibrary: (userId) => {dispatch(getAllScrapbooksThunk(userId))}
    }
}

export default connect(null, null)(Library)

