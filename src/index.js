'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";

// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GridDemoWrapper from './GridDemoWrapper.jsx';



class GridDemo extends Component {

    render() {
        // injectTapEventPlugin();

        return (
            <MuiThemeProvider>
                <div>
                    <h1>Simple React Material Grid Example NO 2</h1>
                    <div className="main_body"><GridDemoWrapper/></div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<GridDemo/>, document.getElementById('app-element'));

