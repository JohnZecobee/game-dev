var canvas;
var context;
var board;
var player;
var state;
var boardSize;
var cellSize;

var init = function () {
    // Initiates the game. Should be called once upon page load.

    canvas = document.getElementById("myCanvas");
    canvas.addEventListener('click', clickHandler);
    boardSize = canvas.width;
    cellSize = Math.floor(boardSize / 3);

    context = canvas.getContext("2d")
    context.font = "48px Arial";
    context.textAlign = "center";

    start();
};

var start = function () {
    // Resets the game. Can be called to start the first game or ready another.

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
    // Gets called every time the canvas is clicked. The parameter contains the mouse coordinates.

    if (state == "playing") {

        var position = getRelativeCoords(event);

        // Determine which cell the player clicked
        var col = Math.floor(position.x / cellSize);
        var row = Math.floor(position.y / cellSize);

        // Validate the cell is on the board
        if (row < 0 || row > 2 || col < 0 || col > 2) {
            console.log("Cell off board");
            return;
        }

        // Validate the cell has not already be picked
        if (board[row][col]) {
            console.log("Cell already taken");
            return;
        }

        // Add the player's move to the internal board
        board[row][col] = player;

        // Render the updated board on the canvas
        draw();

        checkForWin();

        // Toggle between players
        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }

    } else {
        // Clicking when the game is over resets the game
        start();
    }
};

var getRelativeCoords = function (event) {
    // We need to get the mouse position on the canvas, not on the page
    return { x: event.offsetX, y: event.offsetY };
};

var draw = function () {
    // Displays the game board and outcome on the canvas

    // Clears the entire canvas of past drawings
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the grid
    context.fillRect(cellSize - 1, 0, 2, boardSize);
    context.fillRect(cellSize * 2 - 1, 0, 2, boardSize);
    context.fillRect(0, cellSize - 1, boardSize, 2);
    context.fillRect(0, cellSize * 2 - 1, boardSize, 2);

    // Writes each letter on the board
    board.forEach(function (row, row_index) {
        row.forEach(function (cell, col_index) {
            if (cell) {
                x_position = col_index * cellSize + 50;
                y_position = row_index * cellSize + 70;
                context.fillText(cell, x_position, y_position);
            }
        });
    });
};

var checkForWin = function () {
    // Ends the game if any line has been made. Checks for a tie if not.

    if ((board[0][0] == player && board[0][1] == player && board[0][2] == player ) ||
        (board[1][0] == player && board[1][1] == player && board[1][2] == player ) ||
        (board[2][0] == player && board[2][1] == player && board[2][2] == player ) ||
        // horizontal

        (board[0][0] == player && board[1][0] == player && board[2][0] == player ) ||
        (board[0][1] == player && board[1][1] == player && board[2][1] == player ) ||
        (board[0][2] == player && board[1][2] == player && board[2][2] == player ) ||
        // vertical

        (board[0][0] == player && board[1][1] == player && board[2][2] == player ) ||
        (board[2][0] == player && board[1][1] == player && board[0][2] == player )) {
        // diagonal 

            context.fillText("Player " + player + " won!", boardSize / 2, boardSize + 70);
            state = "over";

        } else {
            // Only check for a tied game after checking for a win since the game can be won on the last turn
            checkForTie();
        }
};

var checkForTie = function () {
    // If no moves can be made, the game is over.

    var tie = true;
    board.forEach(function (row) {
        row.forEach(function (cell) {
            // if any one cell is still blank, the game isn't over yet
            if (cell == "") {
                tie = false;
            }
        });
    });

    if (tie) {
        context.fillText("It was a tie!", boardSize / 2, boardSize + 70);
        state = "over";
    }
};
