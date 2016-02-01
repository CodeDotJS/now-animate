#!/usr/bin/env node

var ac = require('ansi-canvas');

var argv = require('yargs')

    .usage('Usage: $0 -w [Your Text]')

    .demand(['w'])

    .argv;


var canvas = ac(),

    i = 0,

    context;


function draw () {

    context = canvas.getContext('2d');

    context.fillStyle = 'black';

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';

    context.font = 'bold ' + ((10 + (i%4) * 0.4) + 'px') + ' ubuntu';

    context.textBaseline = 'bottom';

    context.fillText( argv.w, 25, 25);

}


function render() {

    draw();

    var termCtx = canvas.getContext('2d');

    termCtx.clearRect(0, 0, context.width, context.height);

    i += 1;

    termCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    canvas.render();

}


setInterval(function(){

    render();

}, 100);
