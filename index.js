const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  const artistNames = [];
  // iterate through array of artist objects
  for (let artist of artists) {
    // for each artist object, push the name values with the `name` key
    artistNames.push(artist.name);
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
  // iterate through array of artist objects
  for (let artist of artists) {
    //  for each artist object, iterate through array of albums
    for (let album of artist.albums) {
      // for each album object, push the values with the `title` key
      albumTitles.push(album.title)
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
  const songNames = [];
  // iterate through array of artist objects
  for (let artist of artists) {
    //  for each artist object, iterate through array of albums
    for (let album of artist.albums) {
      // for each album object, iterate through array of songs
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
  // const string = " # # # #\n# # # # \n".repeat(4)
  // return string
  let checkerBoard = '';
  const rows = 8;
  const cols = 8;
  // iterate through rows (height)
  for (let i = 0; i < rows; i++) {
    // populate rows
    //    if row index is odd concat '# # # # \n' to res array if not concat ' # # # #\n'
    checkerBoard += (i % 2) ? '# # # # \n' : ' # # # #\n';
  }
  return checkerBoard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ] - An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerBoard = '';
  // iterate through rows (height)
  for (let i = 0; i < rows; i++) {
    // iterate through spaces in row ()
    for (let j = 0; j < cols; j++) {
      // populate spaces
      //    if sum of indices is odd concat '#' to res array if not concat ' '
      checkerBoard += ((i + j) % 2) ? '#' : ' ';
    }
    // after spaces are populated concat `\n`
    checkerBoard += '\n';
  }
  return checkerBoard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  // // BONUS: create board coordinate reference arrays
  // const boardAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  // const boardNums = [ 8, 7, 6, 5, 4, 3, 2, 1];

  const chessBoard = [];
  // iterate through height of board
  for (let i = 0; i < 8; i++) {
    // create new empty boardrow for each iteration
    let boardRow = [];
    // iterate through spaces
    for (let j = 0; j < 8; j++) {
      // create new empty space object
      let boardSpace = {
        piece: null,
        positionX: i,
        positionY: j,
        // squareName: `${boardAlpha[i]}${boardNums[j]}`, // BONUS
        color: ((i + j) % 2) ? 'dark' : 'light', 
      };
      // push space object to boardRow;
      boardRow.push(boardSpace);      
    }
    // push completed boardRow to chessBoard
    chessBoard.push(boardRow);
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
  const chessBoard = createChessBoard();
  chessBoard[row][column].piece = piece;
  return chessBoard;
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
