import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

class SimpleReactMaterialGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.props.columns,
            initialRows: this.props.initialRows,
            rowData: []
        }

        // Bind non-React methods
        this.addRow = this.addRow.bind(this);
        this.addEmptyRow = this.addEmptyRow.bind(this);

        for (let i = 0; i < this.state.initialRows; i++) {
            this.addEmptyRow();
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

    addEmptyRow() {
        this.addRow({account: null, detail: null, debit: null, credit: null});
    }

    addRow(row) {
        this.state.rowData.push(row);
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
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
}

export default SimpleReactMaterialGrid;
