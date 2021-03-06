import {React, Component} from 'react';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class Joditeditor  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	content: 'Saurabh',
        }
    }

    updateContent = (value) => {
        this.setState({content:value})
    }
    /**
     * @property Jodit jodit instance of native Jodit
     */
	jodit;
	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
    render() {
        return (
            
            <JoditEditor
            	editorRef={this.setRef}
                value={this.state.content}
                config={this.config}
                onChange={this.updateContent}
            />

            
        );
    }
}

export default Joditeditor;
