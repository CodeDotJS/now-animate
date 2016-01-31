var ansi = require('ansi-canvas');

var canvas = ansi(),

    i = 0,

    context;

function draw () {

    context = canvas.getContext('2d');

    context.fillStyle = 'black';

    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'green';

    context.font = 'bold ' + ((8 + (i%4) * 0.4) + 'px') + ' ubuntu';

    context.textBaseline = 'bottom';

    context.fillText('N O D E . j s', 1, 10);

    context.textBaseline = 'top';

    context.fillText('. . . . . . . . . . . . . ', 1, 10);

}

function render() {

    draw();

    var termCtx = canvas.getContext('2d');

    termCtx.clearRect(0, 0, context.width, context.height);

    i += 2;

    termCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    canvas.render();

}

setInterval(function(){

    render();

}, 100);
