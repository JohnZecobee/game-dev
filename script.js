var init = function () {

    var header = document.getElementById("header")
    header.textContent = "Hello Javascript!"

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d")

    canvas.addEventListener('click', clickHandler);

    draw(context);
};

var clickHandler = function (event) {
    position = getRelativeCoords(event);
    console.log("position:", position.x, position.y)

    col = Math.floor(position.x / 100);
    row = Math.floor(position.y / 100);

    console.log("cell:", col, row);
};

var getRelativeCoords = function (event) {
    return { x: event.offsetX, y: event.offsetY };
};

var draw = function (context) {

    context.fillRect(99, 0, 2, 300);
    context.fillRect(199, 0, 2, 300);
    context.fillRect(0, 99, 300, 2);
    context.fillRect(0, 199, 300, 2);
};
