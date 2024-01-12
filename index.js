const musicData = require("./data.json");
// console.log(musicData);

 /* @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */

function getAllArtistNames(artists) {
  const array = []; 
  for ( let i = 0; i < artists.length; i++ ) {
     let element = artists[i]["name"]; 
      array.push(element);
  }
      return array; 
  }



/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */

function getAllAlbumTitles(artists) {
  const array1 = []; 
  for ( let i = 0; i < artists.length; i++ ) {
  for (let j = 0; j < artists[i].albums.length; j++) {

    array1.push(artists[i].albums[j]["title"]);

    }

  }
     return array1; 
}


  // for(let artist of artists){
  //   console.log(artist)
    // for (let j = 0; j < artists[i].albums.length; j++)

    //   array1.push(artists[i].albums[j]["title"]);



  // for(let artist of artists) {
  //for(let album of artist)





/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */

function getAllSongs(artists) {
  const array2 = [];
for (let i = 0; i < artists.length; i++) {
  for(let j = 0; j < artists[i].albums.length; j++) {
    for (let k = 0; k < artists[i].albums[j].songs.length; k++) { 
      array2.push(artists[i].albums[j].songs[k]);
    }
  }  
}
  return array2; 
}

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */

function simpleCheckerBoard() {
 // string is iterated by each character 
  let str = "";

  for(let i = 0; i < 8; i++) {
  if(i % 2 === 0) {    
  str += " # # # #\n"
  }else{
    str += "# # # # \n"
      }
    }
    return str; 
  }






/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */

function dynamicCheckerBoard(rows= 4,cols = 4) {
// 4 by 4 (2D array)
  // assign empty string to variable 
// interate over rows (outer loop) 
// interate over columns (inner loop)
// condition loop with if statement 
//excute code in if statement block of code. 

 let str = ""; 
// 4 by 4 (2D array)

  for (let i = 0; i < rows; i++){
   //npm test console.log(rows); 
    for(let j = 0; j< cols; j++){
    console.log(cols, i, j); 
    if((i + j) % 2 === 0){
      str += " "
    } else {
      str += "#"

        }

      }
      str += "\n"

    }

  return str;
  }

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */

function createChessBoard() {
  let dimensionArea = 8; 
  const arrChessBoard = [];

  for (let row = dimensionArea - 1; row >= 0; row--) {
    let rowsArray = [];

    for (let col = 0; col < dimensionArea; col++) {
      let lightBox = (row + col) % 2 === 0;  
      let boxColor =  lightBox ? 'dark': 'light'; 

const obj = { 
      piece: null,
      positionX: dimensionArea - row - 1,
      positionY: col,
      color: boxColor,
    };
    rowsArray.push(obj); 
  }
    arrChessBoard.push(rowsArray); 
  }
      return arrChessBoard;   
    }   

// console.log(createChessBoard())
/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */

function addPieceToChessBoard(piece, row, column) {
  let dimensionArea = 8; 
  const arrChessBoard = [];

  for (let row = dimensionArea - 1; row >= 0; row--) {
    let rowsArray = [];

    for (let col = 0; col < dimensionArea; col++) {
      let lightBox = (row + col) % 2 === 0;  
      let boxColor =  lightBox ? 'dark': 'light'; 

const obj = { 
      piece: null,
      positionX: dimensionArea - row - 1,
      positionY: col,
      color: boxColor,
    };
    rowsArray.push(obj); 
  }
    arrChessBoard.push(rowsArray); 
  }

  arrChessBoard[row][column]["piece"] = piece;

      return arrChessBoard;   
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
