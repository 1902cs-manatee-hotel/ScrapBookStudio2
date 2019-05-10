import React, { Component, Fragment } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import FormatToolbar from './FormatToolbar'
import Icon from 'react-icons-kit'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'
import {connect} from 'react-redux'
import { updateSingleTextThunk, getEditorText, createSingleTextThunk, deleteSingleTextThunk } from '../store/content'
import Plain from 'slate-plain-serializer'

// const initialValue = Value.fromJSON({
//     document: {
//       nodes: [
//         {
//           object: 'block',
//           type: 'paragraph',
//           nodes: [
//             {
//               object: 'text',
//               leaves: [
//                 {
//                   text: 'A line of text in a paragraph.',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   })

// const existingValue = localStorage.getItem('content')

const initialValue = Plain.deserialize(
  // existingValue ||
  ''
)

class TextEditor extends Component {
    state={
        value: initialValue
    }

    onChange = ({ value }) => {
      // if(value.document != this.state.value.document) {
        const content = Plain.serialize(value)
        // localStorage.setItem('content', content)
        // this.props.updateText(this.props.selectedText, {content})
        // this.props.getEditorText(content)
      // }
      this.setState({ value })
    }

    handleOnClickCreate = () => {
        const content = Plain.serialize(this.state.value)
        this.props.createText(this.props.currentPage, content)
        this.setState({value: initialValue})
    }

    handleOnClickDelete = () => {
        this.props.deleteText(this.props.selectedText)
  }

    render() {
        return (
            <Fragment>
                <FormatToolbar>
                    <button type="submit">
                        <Icon icon={bold} />
                    </button>
                    <button type="submit">
                        <Icon icon={italic} />
                    </button>
                </FormatToolbar>
                <Editor className='box' value={this.state.value} onChange={this.onChange} />
                <button type="submit" onClick={this.handleOnClickCreate}>Create</button>
                {this.props.selectedText ? <button type="submit" onClick={this.handleOnClickDelete}>Delete</button> : null}
            </Fragment>
        )
    }
}

const mapState = state => {
  return {
    selectedText: state.content.selectedText,
    currentPage: state.scrapbooks.singlePage
  }
}

const mapDispatch = dispatch => {
  return {
    updateText: (id, updatedProp) => dispatch(updateSingleTextThunk(id, updatedProp)),
    getEditorText: (content) => dispatch(getEditorText(content)),
    createText: (pageId, content) => dispatch(createSingleTextThunk(pageId, content)),
    deleteText: (textId) => dispatch(deleteSingleTextThunk(textId))
  }
}

export default connect(mapState, mapDispatch)(TextEditor)
