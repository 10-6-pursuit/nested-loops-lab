const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
const artistNames = []
for (let i = 0; i < musicData.length; i++) {
  if (musicData[i].name) {
    artistNames.push(musicData[i].name);
  }
}
return artistNames;
}


/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  const albumTitles = [];
  for (let i = 0; i < musicData.length; i++) {
    const albumArr = musicData[i].albums;
    if (albumArr) {
      for (let j = 0; j < albumArr.length; j++) {
        albumTitles.push(musicData[i].albums[j].title);
      }
    }
  }
  return albumTitles;
}



/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  const allSongs = [];
  for (let i = 0; i < musicData.length; i++) {
    if (musicData[i].albums) {
      for (let j = 0; j < musicData[i].albums.length; j++) {
        allSongs.push(...(musicData[i].albums[j].songs || []));
      }
    }
  }
    return allSongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let board = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";

  }
return board;
}

const createChess = createChessBoard();
console.log(createChess);

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  const dynamicCheckerBoardArr = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dynamicCheckerBoardArr.push((i + j) % 2 === 0 ? " " : '#')
    }
    dynamicCheckerBoardArr.push("\n");
  }
return dynamicCheckerBoardArr.join('');
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  const chessBoard = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const lightSquare = (i + j) % 2 === 0;
      const piece = null;
      const positionX = i;
      const positionY = j;
      const color = lightSquare ? 'light' : 'dark'
      const square = {
        piece,
        positionX,
        positionY,
        color,
      };
      row.push(square)
    }
    chessBoard.push(row);
  }
  return chessBoard;
}

const chessboard = createChessBoard();
console.log(chessboard);

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  const chessBoardSize = 8;

  if (row >= 0 && row < chessboard.length && column >= 0 && column < chessboard[row].length) {
      chessboard[row][column].piece = piece;
  }

  return chessboard;
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
