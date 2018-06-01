var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

var context;

var player = "X";

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

    board[row][col] = player;
    console.log("board:", board);

    draw();

    checkForWin();

    if (player == "X") {
        player = "O";
    } else {
        player = "X"
    }
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

            console.log("Player " + player + " won!");

            context.font = "48px Arial";
            context.textAlign = "center";
            context.fillText("Player " + player + " won!", 150, 370);

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
                console.log("Board filled");

                context.font = "48px Arial";
                context.textAlign = "center";
                context.fillText("It was a tie!", 150, 370);
            }
        }
};
