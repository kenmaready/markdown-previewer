import React from 'react';
import InputArea from './InputArea.js';
import Previewer from './Previewer.js';

class App extends React.Component {
     
    render() {
        return (
            <div className="ui container">
                <br></br>
                <div>
                    <h1>Markdown Previewer</h1>
                    <p>Type text (using markdown language) into the input area
                         and it will render in the previewer below. It's that simple.
                    </p>
                </div>
                <br></br>
                <div>
                    <InputArea />
                </div>
                <br></br>
                <div>
                    <Previewer />
                </div>
            </div>
        );
    };
};


export default App;