import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

class SimpleReactMaterialGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.props.columns,
            rowData: this.createRowData()
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    

    createRowData() {
        return [
            {account: "Toyota", detail: "Celica", debit: 35000, credit: null},
            {account: "Ford", detail: "Mondeo", debit: 32000, credit: null},
            {account: "Porsche", detail: "Boxter", debit: 72000, credit: null}
        ];
    }

    render() {
        let containerStyle = {
            height: 115,
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
        )
    }
}

export default SimpleReactMaterialGrid;
