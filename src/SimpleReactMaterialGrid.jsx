import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

class SimpleReactMaterialGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.props.columns,
            initialRows: this.props.initialRows,
            // rowData: this.props.rows
            rowData:    [
                {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
                    {account: 345, detail: 'bank', debit: null, credit: 9.99},
                    {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
                    {account: 345, detail: 'bank', debit: null, credit: 9.99},
                    {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
                    {account: 345, detail: 'bank', debit: null, credit: 9.99}]
        };
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
        console.log('row data');
        // console.log(this.state.rowData);
    }

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
                    rowData={this.props.rows}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        );
    }

}

export default SimpleReactMaterialGrid;
