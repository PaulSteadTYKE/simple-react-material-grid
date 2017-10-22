'use strict';

import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// import ReactCanvas from 'react-canvas';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SimpleGridExample from './SimpleGridExample.jsx';

class GridDemo extends Component {

    render() {
        // injectTapEventPlugin();

        return (
            <MuiThemeProvider>
                <div>
                    <div className="main_body" ><SimpleGridExample/></div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<GridDemo/>, document.getElementById('app-element'));





