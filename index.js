const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {

  let namesArray = [];

  for (let i = 0; i < artists.length; i++) {

    namesArray.push(artists[i].name);


  }
  return namesArray
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let titlesAlbum = [];
  for (let i = 0; i < artists.length; i++) {
    let artist = artists[i];
    for (let j = 0; j < artist.albums.length; j++)
      titlesAlbum.push(artist.albums[j].title)
  }

  return titlesAlbum;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let songsAlbum = [];
  for (let i = 0; i < artists.length; i++) {
    let artist = artists[i];
    for (let j = 0; j < artist.albums.length; j++)
      songsAlbum = songsAlbum.concat(artist.albums[j].songs);
  }

  return songsAlbum;

}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {

  let checkerBoard = "", toss = false, white = " ", black = "#";

  for (let i = 0; i < 8; i++) {
    toss = !toss;

    for (let j = 0; j < 8; j++) {
      if (toss)
        checkerBoard += white;
      else
        checkerBoard += black;
      toss = !toss;
    }
    checkerBoard += "\n";
  }
  return checkerBoard;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerBoard = "", toss = false, white = " ", black = "#";

  for (let i = 0; i < rows; i++) {
    toss = !toss;

    for (let j = 0; j < cols; j++) {
      if (toss)
        checkerBoard += white;
      else
        checkerBoard += black;
      toss = !toss;
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


  let chessBoard = [], toss = false, white = "light", black = "dark",
    block = {
      piece: null,
      positionX: 0,
      positionY: 0,
      color: "light"
    }, color, row;

  for (let i = 0; i < 8; i++) {
    toss = !toss;
    row = [];
    for (let j = 0; j < 8; j++) {
      if (toss)
        color = white;
      else
        color = black;
      toss = !toss;

      block = {
        piece: null,
        positionX: i,
        positionY: j,
        color: color
      };

      row.push(block);
    }
    chessBoard.push(row);

  }
  console.log(chessBoard);
  return chessBoard;
}
/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) { }

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
