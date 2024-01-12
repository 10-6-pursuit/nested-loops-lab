const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(artists) {
   const artistNames = [];
  for (let i = 0; i < artists.length; i++) {
     artistNames.push(artists[i].name);
  } 
  return artistNames;
}

//  console.log(getAllArtistNames(musicData));
/**
 * 
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
   const albumTitles = [];
   for(let i = 0; i < artists.length; i++) {
    for (let j = 0; j< artists[i].albums.length; j++) {
      albumTitles.push(artists[i].albums[j].title);

    }
   }
   return albumTitles;
}
//  console.log(getAllAlbumTitles(musicData));
/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) { 
  const allSongs = [];
  for (let i = 0; i< artists.length; i++) {
    for (let j= 0; j< artists[i].albums.length; j++) {
       for (let k = 0; k< artists[i].albums[j].songs.length; k++){
         allSongs.push(artists[i].albums[j].songs[k]);

       }
    }
  }
   return allSongs;
}
//  console.log(getAllSongs(musicData));
/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {

//concatenate strings by  0, 1 , 2,3,4,5,6,7
  let board = "";
  const evenRow = " # # # #";
  const oddRow = "# # # # ";
  for (let i = 0; i < 8; i++){
    if (i % 2 === 0){
      board+= evenRow;
    } else {
      board+= oddRow;
    } 
      board+= "\n";
  }

  return board;
}


/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4] - An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4 , cols = 4) {
  let board = "";
  for(let i = 0; i< rows; i++){
    for(let j = 0; j< cols; j++) {
      if (i % 2 === 0) {
        if(j % 2 === 0) {
          board+= " ";
          }else{
          board+= "#";
        } 
    
      } else {
        if(j % 2 === 0) {
          board+= "#";
          }else {
          board+= " ";
        }

      }
      

    }
    board+= "\n";
  }
  return board;
}
console.log(dynamicCheckerBoard());
console.log(dynamicCheckerBoard(6,6));
/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
  let board = [];
  for(let i = 0; i< 8; i++){
    let row =[];
  


    for(let j = 0; j< 8; j++) {
       let color 
       if (i % 2 === 0) {
        if(j % 2 === 0) {
          color = "light";
          }else{
          color = "dark";
        } 
    
      } else {
        if(j % 2 === 0) {
          color = "dark";
          }else {
          color = "light";
        }

      }
      
      let obj = {
        piece: null,
        positionX: i,
        positionY: j,
        color: color
    
      }
      row.push(obj);
    }
    board.push(row);




  }
  return board;
}

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
   let board= createChessBoard();
   board[row][column].piece = piece;
   return board;
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
