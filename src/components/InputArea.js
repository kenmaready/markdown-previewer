import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../actions';
import './InputArea.css';

class InputArea extends React.Component {

    onInputChange = (event) => {
        this.props.updateInput(event.target.value);
    }

    render() {
        return (
            <div className="ui form">
                <div className="field">
                    <p><strong>Input area:</strong></p>
                    <textarea className="input-text" id="editor" onChange={this.onInputChange} value={this.props.text}></textarea>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.newInput.text
    }
}

export default connect(mapStateToProps, { updateInput: updateInput })(InputArea);