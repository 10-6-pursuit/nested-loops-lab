const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
const artistsName = [];
for (let i = 0; i < artists.length; i++) { 
  artistsName.push(artists[i].name);
}
return artistsName;
}
/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  const albumTitle = [];
  for (let i = 0; i < artists.length; i++) {
    
    for (let j = 0; j < artists[i].albums.length; j++) {
      let titleOfAlbums = artists[i].albums[j].title;
      albumTitle.push(titleOfAlbums);
    }
  }
  return albumTitle;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  const albumSongs = [];
  for (let i = 0; i < artists.length; i++) {

    for (let j = 0; j < artists[i].albums.length; j++) {
      let allSongs = artists[i].albums[j].songs;
      for (let song of allSongs) {
        albumSongs.push(song);
      }
    }
  }
  return albumSongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let board = "";
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      board += " # # # #\n";
    } else {
      board += "# # # # \n";
    }
  } 
  return board;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerBoard = "";
  for ( let i = 0; i < rows; i++) {
  
    for (let j = 0; j < cols; j++) {
      if (i % 2 === 0 && j % 2 === 0 || (i % 2 !== 0 && j % 2 !== 0 )) {
        checkerBoard += " ";
        
      } else checkerBoard += "#";
    }
    checkerBoard += "\n";
  }
  return checkerBoard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let chessBoard = [];
  for (let row = 0; row < 8; row++) {
    let rowArray = [];
    for (let col = 0; col < 8; col++) {
      let square = {
        piece: null,
        positionX: row,
        positionY: col,
        color: (row + col) % 2 === 0 ? 'light' : 'dark'
      }
      rowArray.push(square);
   }
   chessBoard.push(rowArray);
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
  const fullChessBoard = createChessBoard();
  fullChessBoard[row][column] = {
    piece: piece,
    positionX: row,
    positionY: column,
    color: (row + column) % 2 === 0 ? 'light' : 'dark'
  }
  return fullChessBoard;
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
