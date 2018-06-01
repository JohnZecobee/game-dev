var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var context;

var init = function () {

    var canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d")

    canvas.addEventListener('click', clickHandler);

    draw();
};

var clickHandler = function (event) {
    var position = getRelativeCoords(event);

    var col = Math.floor(position.x / 100);
    var row = Math.floor(position.y / 100);
    console.log("cell:", col, row);

    board[row][col] = "X";
    console.log("board:", board);

    draw();
};

var getRelativeCoords = function (event) {
    return { x: event.offsetX, y: event.offsetY };
};

var draw = function () {

    context.fillRect(99, 0, 2, 300);
    context.fillRect(199, 0, 2, 300);
    context.fillRect(0, 99, 300, 2);
    context.fillRect(0, 199, 300, 2);

    context.font = "50px Arial";
    context.textAlign = "center";

    board.forEach(function (row, row_index) {
        row.forEach(function (cell, col_index) {
            if (cell == "X") {
                x_position = col_index * 100 + 50;
                y_position = row_index * 100 + 70;
                context.fillText("X", x_position, y_position);
            }
        });
    });
};
