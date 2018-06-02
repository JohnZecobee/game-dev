var canvas;
var context;
var board;
var player;
var state;

var init = function () {

    canvas = document.getElementById("myCanvas");
    canvas.addEventListener('click', clickHandler);

    context = canvas.getContext("2d")

    context.font = "48px Arial";
    context.textAlign = "center";

    start();
};

var start = function () {

    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    player = "X";
    state = "playing";

    draw();
};

var clickHandler = function (event) {

    if (state == "playing") {

        var position = getRelativeCoords(event);

        var col = Math.floor(position.x / 100);
        var row = Math.floor(position.y / 100);

        if (row < 0 || row > 2 || col < 0 || col > 2) {
            console.log("Cell off board");
            return;
        }

        if (board[row][col]) {
            console.log("Cell already taken");
            return;
        }

        board[row][col] = player;

        draw();

        checkForWin();

        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }

    } else {
        start();
    }
};

var getRelativeCoords = function (event) {
    return { x: event.offsetX, y: event.offsetY };
};

var draw = function () {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillRect(99, 0, 2, 300);
    context.fillRect(199, 0, 2, 300);
    context.fillRect(0, 99, 300, 2);
    context.fillRect(0, 199, 300, 2);

    board.forEach(function (row, row_index) {
        row.forEach(function (cell, col_index) {
            if (cell) {
                x_position = col_index * 100 + 50;
                y_position = row_index * 100 + 70;
                context.fillText(cell, x_position, y_position);
            }
        });
    });
};

var checkForWin = function () {

    if ((board[0][0] == player && board[0][1] == player && board[0][2] == player ) ||
        (board[1][0] == player && board[1][1] == player && board[1][2] == player ) ||
        (board[2][0] == player && board[2][1] == player && board[2][2] == player ) ||

        (board[0][0] == player && board[1][0] == player && board[2][0] == player ) ||
        (board[0][1] == player && board[1][1] == player && board[2][1] == player ) ||
        (board[0][2] == player && board[1][2] == player && board[2][2] == player ) ||

        (board[0][0] == player && board[1][1] == player && board[2][2] == player ) ||
        (board[2][0] == player && board[1][1] == player && board[0][2] == player )) {

            context.fillText("Player " + player + " won!", 150, 370);
            state = "over";

        } else {
            var tie = true;
            board.forEach(function (row) {
                row.forEach(function (cell) {
                    if (cell == "") {
                        tie = false;
                    }
                });
            });
            if (tie) {
                context.fillText("It was a tie!", 150, 370);
                state = "over";
            }
        }
};
