const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  const artistNames = [];
  for(let i = 0; i < artists.length; i++){
    artistNames.push(artists[i].name)
  }
  return artistNames;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  const albumNames = [];
  for(let i = 0; i < artists.length; i++){
    if(artists[i].albums) {
      for(let j = 0; j < artists[i].albums.length; j++) {
      albumNames.push(artists[i].albums[j].title);
      }
    }
  }
  return albumNames;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  const songNames = [];
  for(let i = 0; i < artists.length; i++){
    if(artists[i].albums) {
      for(let j = 0; j < artists[i].albums.length; j++) {
        if(artists[i].albums[j].songs) {
          for(let k = 0; k < artists[i].albums[j].songs.length; k++) {
            songNames.push(artists[i].albums[j].songs[k]);
          }
        }
      }
    }
  }
  return songNames;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let stringCheckerBoard = "";
  
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if((j + i) % 2 === 0) {
        stringCheckerBoard += " ";
      } else {
        stringCheckerBoard += "#";
      }
    }
    stringCheckerBoard += "\n";
  }
  return stringCheckerBoard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows, cols) {
  let stringCheckerBoard = "";
  if(rows === undefined || cols === undefined) {
    for(let i = 0; i < 4; i++) {
      for(let j = 0; j < 4; j++) {
        if((j + i) % 2 === 0) {
          stringCheckerBoard += " ";
        } else {
          stringCheckerBoard += "#";
        }
      }
      stringCheckerBoard += "\n";
    }
    return stringCheckerBoard;
  } else {
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if((j + i) % 2 === 0) {
          stringCheckerBoard += " ";
        } else {
          stringCheckerBoard += "#";
        }
      }
      stringCheckerBoard += "\n";
    }
    return stringCheckerBoard;
  }
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  const arrayChessBoard = [];
  const squareNameLetter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const squareNameNumber = ["8", "7", "6", "5", "4", "3", "2", "1"];

    for(let x = 0; x < 8; x++) {
      const arrayRow = [];
      arrayChessBoard.push(arrayRow);
      for(let y = 0; y < 8; y++) {
        if((x + y) % 2 === 0) {
          arrayRow.push({piece: null,
            positionX: x,
            positionY: y,
            // squareName: squareNameLetter[x] + squareNameNumber[y],
            color: "light",
          });
        } else {
            arrayRow.push({piece: null,
              positionX: x,
              positionY: y,
              // squareName: squareNameLetter[x] + squareNameNumber[y],
              color: "dark",
            });
        }
      }
    }
    return arrayChessBoard;
  }

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  const chessboard = createChessBoard();
  chessboard[row][column] = {piece: piece,
    positionX: row,
    positionY: column,
    color: (row + column) % 2 === 0 ? "light" : "dark",
  };
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
