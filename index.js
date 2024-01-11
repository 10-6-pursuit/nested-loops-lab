const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each artist.
 */
function getAllArtistNames(artists) {
  let nameOfArtists = [];
  for (let data of artists) {
    nameOfArtists.push(data.name);
  }
  return nameOfArtists;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let artistAlbum = [];
  for (let data of artists) {
    for (let albums of data.albums) {
      artistAlbum.push(albums.title);
    }
  }
  return artistAlbum;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let allSongs = [];
  for (let data of artists) {
    for (let albums of data.albums) {
      for (let song of albums.songs) {
        allSongs.push(song);
      }
    }
  }
  return allSongs;
}

/**
 * Create a string that represents a checkerboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  const str = " # # # #\n# # # # \n";
  const checkerboard = str.repeat(4);
  return checkerboard;
}

/**
 * Create a string that represents a checkerboard. See the instructions.md for more details
 * @param {number} [rows = 4 ] An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */

//pseudocode:
/*
 */
function dynamicCheckerBoard(row = 4, column = 4) {
  const arr = [];
  for (let i = 0; i < row; i++) {
    let position = "";
    for (let j = 0; j < column; j++) {
      position += (i + j) % 2 === 1 ? "#" : " "; 
    }
    arr.push(position);
  }
  return arr.join("\n") + "\n";
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard(row = 8, column = 8) {


  let chestboard = [];

  for (let i = 0; i < row; i++) {
    let row = [];
    
    for (let j = 0; j < column; j++) {
      let square = {
        piece: null,
        positionX: i,
        positionY: j,
        color:(i + j) % 2 === 1 ? "dark" : "light",
      };
      row.push(square);
    }
    chestboard.push(row);
  }
  return chestboard;
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
    chessboard[row][column].piece = piece;
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
