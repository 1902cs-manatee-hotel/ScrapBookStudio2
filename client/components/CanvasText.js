import React, {Component} from 'react'
import {Text} from 'react-konva'
import { connect } from 'react-redux';
import { deleteSingleTextThunk, getSingleTextThunk } from '../store/content'

class CanvasText extends Component {
    constructor() {
        super()
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.props.selectText(this.props.id)
    }

    render() {
        return(
            <Text onClick={this.handleOnClick} />
        )
    }
}

const mapState = (state) => {
    return {
        selected: state.content.selectedText
    }
}

const mapDispatch = (dispatch) => {
    return {
        delete: (id) => dispatch(deleteSingleTextThunk(id)),
        selectText: (id) => dispatch(getSingleTextThunk(id))
    }
}

export default connect(mapState, mapDispatch)(CanvasText)
