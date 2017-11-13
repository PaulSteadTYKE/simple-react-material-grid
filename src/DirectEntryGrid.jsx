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
                { headerName: 'Credit', field: 'credit' }],
            // initialRows: this.props.initialRows,
        };

        // this.addRow = this.addRow.bind(this);
        //
        // for (let i = 0; i < this.state.initialRows; i++) {
        //     this.addEmptyRow();
        // }
    }

    // addEmptyRow() {
    //     this.addRow({account: null, detail: null, debit: null, credit: null});
    // }

    // addRow(row) {
    //     // this.state.rowData.push(row);
    // }

    componentDidMount() {
        this.foo.addRow({account: null, detail: null, debit: null, credit: null});
        this.foo.addRow({account: null, detail: null, debit: null, credit: null});
        this.foo.addRow({account: null, detail: null, debit: null, credit: null});
    }

    render() {
        return (
            <SimpleReactMaterialGrid columns={this.state.columns} ref={(foo) => { this.foo = foo; }}/>
        );


    }
}

export default DirectEntryGrid;