import React, { Component, Fragment } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import FormatToolbar from './FormatToolbar'
import Icon from 'react-icons-kit'
import { bold } from 'react-icons-kit/feather/bold'
import { italic } from 'react-icons-kit/feather/italic'

const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'A line of text in a paragraph.',
                },
              ],
            },
          ],
        },
      ],
    },
  })

export default class TextEditor extends Component {
    state={
        value: initialValue
    }

    onChange = ({ value }) => {
        this.setState({ value })
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
            </Fragment>
        )
    }
}

