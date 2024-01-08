const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */

function getAllArtistNames(artists) {
  let arr = [];
  for (let i = 0; i < artists.length; i++) {
    arr.push(artists[i].name);
  }
  return arr;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */

function getAllAlbumTitles(artists) {
  let arr = [];
  for (let i = 0; i < artists.length; i++) {
    for (let j = 0; j < artists[i].albums.length; j++) {
      arr.push(artists[i].albums[j].title);
    }
  }
  return arr;
}
/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */

function getAllSongs(artists) {
  let arr = [];
  for (let i = 0; i < artists.length; i++) {
    for (let j = 0; j < artists[i].albums.length; j++) {
      for (let k = 0; k < artists[i].albums[j].songs.length; k++) {
        arr.push(artists[i].albums[j].songs[k]);
      }
    }
  }
  return arr;
}
/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */

function simpleCheckerBoard() {
  let str = "";
  let evenRow = " # # # #" + "\n";
  let oddRow = "# # # # " + "\n";
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr[i] = [];
    if ((!(i%2)) || i === 0) {
      arr[i] = evenRow;
    } else {
      arr[i] = oddRow;
    }
  } 
  return str = arr.join("");
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */

function dynamicCheckerBoard(param1, param2) {

  const row = param1 < 4 || !param1 ? 4 : param1;
  const col = param2 < 4 || !param2 ? 4 : param2;

  let str = "";
  let matrix = [];

  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      if (!(i%2) || !i ) {
        matrix[i][j] = (!(j%2) || !j ) ? " " : "#";
      } else {
        matrix[i][j] = (!(j%2) || !j ) ? "#" : " ";
      }
    }
  }
  for (let i = 0; i < row; i++) {
  str += matrix[i].join("") + "\n";
  }
  return str;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */

function createChessBoard() {
  let chessBoard = [];
    for (let i = 0; i < 8; i++) {
      chessBoard[i] = [];
      for (let j = 0; j < 8; j++) {
        chessBoard[i][j] = {};

        chessBoard[i][j].piece = null;
        chessBoard[i][j].positionX = i;
        chessBoard[i][j].positionY = j;
        
        let xPos = i === 0 ? "A": i === 1 ? "B": i === 2 ? "C": i === 3 ? "D": i === 4 ? "E": i === 5 ? "F": i === 6 ? "G": i === 7 ? "H": null;
        let yPos = j === 0 ? "8": j === 1 ? "7": j === 2 ? "6": j === 3 ? "5": j === 4 ? "4": j === 5 ? "3": j === 6 ? "2": j === 7 ? "1": null;
        // chessBoard[i][j].squareName = `${xPos}${yPos}`;

        if (!(i%2) || !i ) {
          chessBoard[i][j].color = (!(j%2) || !j ) ? "light" : "dark";
        } else {
          chessBoard[i][j].color = (!(j%2) || !j ) ? "dark" : "light";
        }
      }
    }
  return chessBoard;
}

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */

function addPieceToChessBoard(piece, row, column) {
  let board = createChessBoard();
  board[row][column].piece = `${piece}`;
  return board;
}

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
