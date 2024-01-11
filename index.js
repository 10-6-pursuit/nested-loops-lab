const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
  let arrayArtists = [];
  for (let artist of artists) {
    arrayArtists.push(artist.name);
  }
  
  return arrayArtists;
}

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let arrayAlbum = [];
  for (let artist of artists) {
    for (let titles of artist.albums) {
      arrayAlbum.push(titles.title);
    }
  }
  return arrayAlbum;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let arraySongs = [];
  for (let artist of artists) {
    for (let album of artist.albums) {
      for (let song of album.songs) {
        arraySongs.push(song);
      }
    }
  }
  return arraySongs;
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
 
  return " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let checkerBoard = "";
  let colStart = 1;
  let rowStart = 1;
  
  while (rowStart <= rows) {
    if (rowStart % 2 === 1) {
      while (colStart <= cols) {
        if (colStart % 2 === 1) {
          checkerBoard += " ";
          colStart++;
        } else {
          checkerBoard += "#";
          colStart++;
        }
      }
      checkerBoard += "\n";
      colStart = 1;
      rowStart++;
    } else {
      while (colStart <= cols) {
        if (colStart % 2 === 1) {
          checkerBoard += "#";
          colStart++;
        } else {
          checkerBoard += " ";
          colStart++
        }
      }
      checkerBoard += "\n";
      colStart = 1;
      rowStart++;
    }
  }
  return checkerBoard;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
                      
                            /*  THE COMMENTED OUT LINES WOULD BE FOR THE BONUS PART  */

  let chessBoard = [];
  let chessBoardRows = [];
  let boardRows = 0;
  let boardCols = 0;
  //let ascii = 65;
  //let squareNum = 8;

  while (boardRows < 8) {
    let object = {};
    while (boardCols < 8) {
      let newObj = {...object};
      newObj.piece = null;
      newObj.positionX = boardRows;
      newObj.positionY = boardCols;
      boardCols++;
      //newObj.squareName = `${String.fromCharCode(ascii)}${squareNum}`;
      if (newObj.positionX % 2  === newObj.positionY % 2) {
        newObj.color = "light";
      } else newObj.color = "dark";
      chessBoardRows.push(newObj)
      // squareNum--;
    }
    chessBoard.push(chessBoardRows);
    chessBoardRows = [];
    boardRows++;
    boardCols = 0;
    // ascii++;
    // squareNum = 8;
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
  let originalChessBoard = createChessBoard();

  originalChessBoard[row][column].piece = piece;

  return originalChessBoard;
}

console.log(addPieceToChessBoard("pawn",1,2));

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
