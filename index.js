const musicData = require("./data.json");
// console.log(musicData);
// 
/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  let artistName = [];
  for (let artist of artists) {
artistName.push(artist.name)
  }
  return artistName; 
}
//
/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let albumTitles = [];
  for (let artist of artists) {
     for(let album of artist.albums){
      albumTitles.push(album.title);
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
  let songNames = [];
  for (let artist of artists) {
    for (let album of artist.albums) {
      for (let song of album.songs) {
        songNames.push(song);
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
  let checkBoard = "";
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if ((row + column) % 2 === 0) {
        checkBoard += " ";
      } else {
        checkBoard += "#"; 
      }
    }
    checkBoard += "\n";
  }
  return checkBoard;
}
  



/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */ 
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkBoard2 = "";
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 === 0) {
        checkBoard2 += ' ';
      } else {
        checkBoard2 += '#';
      }
    }
    checkBoard2 += '\n';
  }
  return checkBoard2;
}


/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let board = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let colorOfSquare;
      if ((row + col) % 2 === 0 ) {
        colorOfSquare = 'light'; 
      } else {
        colorOfSquare = 'dark'; 
      }
      board.push({
        piece: null, 
        positionX: col,
        positionY: row,
        color: color
      });
    }
  }

  return board;

  
/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column, board) {
  
    // Calculate the index in the board array where the piece should be placed.
    let index = row * 8 + column;
  
    // Check if the square at the calculated index exists in the board.
    if (board[index]) {
      // If the square exists, set the 'piece' property of that square to the given piece.
      board[index].piece = piece;
    }
  
    // Return the updated board.
    return board;
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
