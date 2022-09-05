/**
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function (n) {
//   function isValid(row, col, chessBoard, n) {
//     // 判断不同列
//     for (let i = 0; i < row; i++) {
//       if (chessBoard[i][col] == "Q") {
//         return false;
//       }
//     }
//     // 判断135度
//     for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//       if (chessBoard[i][j] == "Q") {
//         return false;
//       }
//     }
//     // 判断45度
//     for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//       if (chessBoard[i][j] == "Q") {
//         return false;
//       }
//     }
//     return true;
//   }

//   function transformChessBoard(chessBoard) {
//     let chessBoardBack = [];
//     chessBoard.forEach((row) => {
//       let rowStr = "";
//       row.forEach((value) => {
//         rowStr += value;
//       });
//       chessBoardBack.push(rowStr);
//     });
//     return chessBoardBack;
//   }

//   function backTracking(row, chessBoard) {
//     if (row == n) {
//       res.push(transformChessBoard(chessBoard));
//       return;
//     }

//     for (let col = 0; col < n; col++) {
//       if (isValid(row, col, chessBoard, n)) {
//         chessBoard[row][col] = "Q";
//         console.log(chessBoard);
//         backTracking(row + 1, chessBoard);
//         chessBoard[row][col] = ".";
//       }
//     }
//   }
//   let res = [];
//   let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill("."));
//   backTracking(0, chessBoard);
//   return res;
// };

var solveNQueens = function (n) {
  function isValid(row, col, chessBoard, n) {
    // 检查这一列
    for (let i = 0; i < n; i++) {
      if (chessBoard[i][col] == "Q") {
        return false;
      }
    }
    // 检查135度
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] == "Q") {
        return false;
      }
    }
    // 检查45度
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] == "Q") {
        return false;
      }
    }
    return true;
  }
  function transformChessBoard(chessBoard) {
    let chessBoardBack = [];
    chessBoard.forEach((row) => {
      let rowStr = "";
      row.forEach((value) => {
        rowStr += value;
      });
      chessBoardBack.push(rowStr);
    });
    return chessBoardBack;
  }
  function backTracking(row, chessBoard) {
    if (row == n) {
      res.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = "Q";
        backTracking(row + 1, chessBoard);
        chessBoard[row][col] = ".";
      }
    }
  }

  let res = [];
  let chessBoard = new Array(n).fill(0).map(() => {
    return new Array(n).fill(".");
  });
  backTracking(0, chessBoard);
  return res;
};
let n = 4;
let res = solveNQueens(n);
console.log(res);
