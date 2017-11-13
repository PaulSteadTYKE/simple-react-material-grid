'use strict';

import React, {Component} from 'react'
import DirectEntryGrid from './DirectEntryGrid'

class GridDemoWrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DirectEntryGrid initialRows={6}/>
        );
    }
}

export default GridDemoWrapper;