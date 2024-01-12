const musicData = require("./data.json");
const chessBoardObjects = require("./chessboardObjects.json")
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  let outPut = []
  for (let artist of artists){
    outPut.push(artist.name)
  }
  return outPut
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let outPut =[];
  for (let artist of artists){
    let album = artist.albums
    for (let tl of album){
        outPut.push(tl.title)
  }
}
return outPut
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let array = []
  for (let artist of artists){
    let album = artist.albums
    for (let tl of album){
       let output = tl.songs
        for (let songs of output){
          array.push(songs)
      }
    }
  }
  return array
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard(){
  let string = ""
  for (let i = 0; i <=7; i++){
    string += ""
    for (let j = 0; j <=0 ; j++){
      if(i % 2 === 1){
      string += "# # # # "
      } else {
        string += " # # # #"
      }
    }
    string += "\n"
  }
    return string
  }
/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows, cols) {
  if(!rows && !cols){
    rows = 4
    cols = 4
  }
  let string = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if ((i + j) % 2 === 1) {
        string += "#";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  return string;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let array = [];
  for (let i = 0; i < 8; i++) {
    let subArray = [];
    for (let j = 0; j < 8; j++) {
      subArray.push({ piece: null, positionX: i, positionY: j, color: (i + j) % 2 === 0 ? 'light' : 'dark' });
    }
    array.push(subArray);
  }
  return array;
}
const chessBoard = createChessBoard()
/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  
  if (chessBoard[0][0].piece = null){
    chessBoard[row][column].piece = piece
  } else {
    chessBoard[row][column].piece = piece
  }
    
  return chessBoard
  
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
