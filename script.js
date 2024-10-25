var board = ["", "", "", "", "", "", "", "", ""];
function playerMove(cell, player) {
    var index = parseInt(cell.id.replace("cell-", ""));
    if (board[index] == "") {
        cell.classList.add(player);
        cell.innerHTML = player;
        board[index] = player;
        if (checkWin(player)) {
            alert(player + " Wins!");
            reset();
        } else if (checkTie()) {
            alert("Tie Game!");
            reset();
        }
    }
}

function checkWin(player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

function checkTie() {
    for (var i = 0; i < board.length; i++) {
        if (board[i] == "") {
            return false;
        }
    }
    return true;
}

function reset() {
    for (var i = 0; i < board.length; i++) {
        board[i] = "";
        var cell = document.getElementById("cell-" + i);
        cell.innerHTML = "";
        cell.classList.remove("x");
        cell.classList.remove("o");
    }
}

var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (player == "x") {
            playerMove(this, "x");
            player = "o";
        } else {
            playerMove(this, "o");
            player = "x";
        }
    });
}

var player = "x";
reset();