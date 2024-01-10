const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  let allArtist = [];
  for(let artist of artists){
    allArtist.push(artist.name);
  }
  return allArtist;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let allAlbums = [];
  for (let artist of artists){
    for (let albums of artist.albums){
      allAlbums.push(albums.title);
    }
  }
return allAlbums;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let allSongs = [];
  for (let artist of artists){
    for (let albums of artist.albums){
      allSongs.push(albums.songs);
    }
  }
return allSongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let checkboard = "", light = " ", dark = "#";
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 === 0){
        checkboard += light;
      } else {
        checkboard += dark;
      }
    }
    checkboard += '\n';
  }
  return checkboard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows, cols) {
  let checkboard = "", light = " ", dark = "#";
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if((i + j) % 2 === 0){
        checkboard += light;
      } else {
        checkboard += dark;
      }
    }
    checkboard += '\n';
  }
  return checkboard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let chessBoard = [];
  for(let i = 0; i < 8; i++){
    let row = [];
    for(let j = 0; j < 8; j++){
      row.push({
        color: (i + j) % 2 === 0 ? "light" : "dark",
        piece: null,
        positionX: i,
        positionY: j,
      });
      chessBoard.push(row);
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
  for(let i = 0; i < 8; i++){
    if(row === i){
      for(let j = 0; j < 8; i++){
        if(column = j){
          
        }
      }
    }
  }
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
