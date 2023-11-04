import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    editableText: true,
    inputText: '',
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  toggleButton = () => {
    this.setState(prevState => ({editableText: !prevState.editableText}))
  }

  render() {
    const {editableText, inputText} = this.state
    return (
      <div className="app-container">
        <div className="editable-card">
          <h1 className="heading">Editable Text Input</h1>

          {editableText ? (
            <div className="input-editable-container">
              <input
                type="text"
                className="input"
                value={inputText}
                onChange={this.onChangeInput}
              />
              <button
                className="button"
                type="button"
                onClick={this.toggleButton}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-editable-container">
              <p className="description">{inputText}</p>
              <button
                type="button"
                className="button"
                onClick={this.toggleButton}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableText
