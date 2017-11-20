import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

class SimpleReactMaterialGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.props.columns,
            initialRows: this.props.initialRows,
            rowData: [{account: 123, detail: 'git subscription', debit: 1.23, credit: null},
                {account: 345, detail: 'bank', debit: null, credit: 9.99}]
        };

        // Bind non-React methods
        // this.addRow = this.addRow.bind(this);
        // this.addEmptyRow = this.addEmptyRow.bind(this);

        // for (let i = 0; i < this.state.initialRows; i++) {
        //     this.addEmptyRow();
        // }
    }
    onGridReady(params) {
        console.log('onGridReady');
        this.gridApi = params.api;
        // this.state.gridApi = params.api;
        this.columnApi = params.columnApi;
        console.log('calling sizeColumnsToFit');
        this.gridApi.sizeColumnsToFit();

        // this.addRow({account: 1, detail: null, debit: null, credit: null});

        // this.rowData.push({account: 1, detail: null, debit: null, credit: null});
        this.gridApi.updateRowData({add: [{account: 1, detail: null, debit: null, credit: null}], addIndex: 2});

        this.addAnotherRow();

    }

    addAnotherRow() {
        console.log('adding row inside SRMG' + row);
        this.gridApi.updateRowData({add: [{account: 10, detail: null, debit: null, credit: null}], addIndex: 4});
    };

    render() {
        let containerStyle = {
            height: 200,
            width: 500
        };
        return (
            <div style={containerStyle} className="ag-fresh">
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        );
    }

}

// addRow = (row) =>  {
//     console.log('adding row inside SRMG...');
//     // this.state.rowData.push(row);
//     // this.gridApi.updateRowData();
// };


export default SimpleReactMaterialGrid;
