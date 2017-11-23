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
        };
    }

    render() {
        return (
            <div>
                <SimpleReactMaterialGrid columns={this.state.columns} rows={this.getRows()}/>
            </div>
        );
    }

    getRows() {
        return [
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99},
            {account: 123, detail: 'git subscription', debit: 1.23, credit: null},
            {account: 345, detail: 'bank', debit: null, credit: 9.99}
        ];
    }
}

export default DirectEntryGrid;