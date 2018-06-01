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

    checkForWin()
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

var checkForWin = function () {

    if ((board[0][0] && board[0][1] && board[0][2]) ||
        (board[1][0] && board[1][1] && board[1][2]) ||
        (board[2][0] && board[2][1] && board[2][2]) ||

        (board[0][0] && board[1][0] && board[2][0]) ||
        (board[0][1] && board[1][1] && board[2][1]) ||
        (board[0][2] && board[1][2] && board[2][2]) ||

        (board[0][0] && board[1][1] && board[2][2]) ||
        (board[2][0] && board[1][1] && board[0][2])) {
        
            console.log("Player won!")

            context.font = "50px Arial";
            context.textAlign = "center";
            context.fillText("Player won!", 150, 370);
        }
};
