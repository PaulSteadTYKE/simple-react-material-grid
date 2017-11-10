'use strict';

import React, {Component} from "react";
import SimpleReactMaterialGrid from './SimpleReactMaterialGrid'

class DirectEntryGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { headerName: 'Account', field: 'account' },
                { headerName: 'Detail', field: 'detail' },
                { headerName: 'Debit', field: 'debit' },
                { headerName: 'Credit', field: 'credit' }]
        };
    }

    render() {
        return (
            <SimpleReactMaterialGrid columns={this.state.columns} initialRows={5}/>
        );


    }
}

export default DirectEntryGrid;