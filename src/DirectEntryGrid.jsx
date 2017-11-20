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

    onAddRow(row) {
        console.log('add row to DirectEntryGrid');
        this.materialGrid.addRow({account: 10, detail: null, debit: null, credit: null});
    }

    componentDidMount() {
        // console.log('Adding row from DirectEntryGrid');
        // this.materialGrid.addRow({account: 1, detail: null, debit: null, credit: null});
        // this.materialGrid.addRow({account: 2, detail: null, debit: null, credit: null});
        // this.materialGrid.addRow({account: 3, detail: null, debit: null, credit: null});
    }

    render() {
        return (
            <div>
                <SimpleReactMaterialGrid columns={this.state.columns} ref={(materialGrid) => { this.materialGrid = materialGrid; }}/>
                <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                    <button onClick={this.onAddRow.bind(this)}>Add Row</button>
                </div>
            </div>
        );


    }
}

export default DirectEntryGrid;