'use strict';

import React, {Component} from 'react'
import ReactCanvas from 'react-canvas';

class SimpleReactMaterialGrid extends Component {

    var Surface = ReactCanvas.Surface;
    var Image = ReactCanvas.Image;
    var Text = ReactCanvas.Text;


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
        buildGrid(ctx, 500, 500, 50, 30, "grey", 2);
    }



    render() {

        var surfaceWidth = window.innerWidth;
        var surfaceHeight = window.innerHeight;
        var imageStyle = this.getImageStyle();
        var textStyle = this.getTextStyle();

        return (
            <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
                <Image style={imageStyle} src='...' />
                <Text style={textStyle}>
                    Here is some text below an image.
                </Text>
            </Surface>
        );



        // return (
        //     <canvas ref="canvas" width={500} height={500}/>
        // );


    }
}

// “reusable component”
function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

function buildGrid(ctx, canvasWidth, canvasHeight, cellWidth, cellHeight, color, gap) {


    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = color;

    // horizontal grid lines
    for (var i = 0; i <= canvasHeight; i = i + cellHeight) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasWidth, i);
        if (i % parseInt(gap) == 0) {
            ctx.lineWidth = 0.5;
        } else {
            ctx.lineWidth = 0.5;
        }
        ctx.closePath();
        ctx.stroke();
    }

    // vertical grid lines
    for (var j = 0; j <= canvasWidth; j = j + cellWidth) {
        ctx.beginPath();
        ctx.moveTo(j, 0);
        ctx.lineTo(j, canvasHeight);
        if (j % parseInt(gap) == 0) {
            ctx.lineWidth = 0.5;
        } else {
            ctx.lineWidth = 0.5;
        }
        ctx.closePath();
        ctx.stroke();
    }

    for(var ii = 0; ii <= canvasWidth; ii+=2) {
        for(var jj=0; jj <= canvasHeight; jj+=2) {
            ctx.clearRect(ii,jj,1,1);
        }
    }
}

export default SimpleReactMaterialGrid;

