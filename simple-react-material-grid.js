'use strict';

import React, {Component} from 'react'

class SimpleReactMaterialGrid extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {

        const ctx = this.refs.canvas.getContext('2d');
        // draw children “components”
        // rect({ctx, x: 10, y: 10, width: 50, height: 50});
        // rect({ctx, x: 110, y: 110, width: 50, height: 50});

        buildGrid(ctx, 300, 300, 5, "grey", 2);
    }


    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );


    }
}

// “reusable component”
function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

function buildGrid(ctx, width, height, gridPixelSize, color, gap) {


    ctx.clearRect(0, 0, width, height);

    // var canvas = $('#' + div + '').get(0);
    // var ctx = canvas.getContext("2d");
    //ctx.fillStyle="rgba(255, 255, 255, 0)";
    //ctx.fillRect(0, 0, 500, 300);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = color;

    // horizontal grid lines
    for (var i = 0; i <= height; i = i + gridPixelSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        if (i % parseInt(gap) == 0) {
            ctx.lineWidth = 0.5;
        } else {
            ctx.lineWidth = 0.5;
        }
        ctx.closePath();
        ctx.stroke();
    }

    // vertical grid lines
    for (var j = 0; j <= width; j = j + gridPixelSize) {
        ctx.beginPath();
        ctx.moveTo(j, 0);
        ctx.lineTo(j, height);
        if (j % parseInt(gap) == 0) {
            ctx.lineWidth = 0.5;
        } else {
            ctx.lineWidth = 0.5;
        }
        ctx.closePath();
        ctx.stroke();
    }

    for(var ii = 0; ii <= width; ii+=2) {
        for(var jj=0; jj <= height; jj+=2) {
            ctx.clearRect(ii,jj,1,1);
        }
    }
}

export default SimpleReactMaterialGrid;

