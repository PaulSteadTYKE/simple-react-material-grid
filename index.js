'use strict';

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SimpleReactMaterialGrid from './simple-react-material-grid';

class GridDemo extends Component {

    render() {
        injectTapEventPlugin();

        return (
            <MuiThemeProvider>
                <div>
                    <div className="main_body" ><SimpleReactMaterialGrid/></div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<GridDemo/>, document.getElementById('app-element'));





