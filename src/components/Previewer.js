import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../actions';
import './Previewer.css';

class Previewer extends React.Component {

    render() {
        return (
            <div>
                <p><strong>Previewer:</strong></p>
                <div className="ui segment previewer" id="preview" dangerouslySetInnerHTML={ {__html: this.props.markdown} } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        markdown: state.newInput.markdown
    }
}

export default connect(mapStateToProps, { updateInput : updateInput })(Previewer);