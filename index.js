const musicData = require("./data.json");
// console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */
function getAllArtistNames(musicData) {
	const names = [];
	for (let i = 0; i < musicData.length; i++) {
		names.push(musicData[i].name);
	}

	return names;
}
// getAllArtistNames(musicData)

/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
	const albumTitles = [];

	for (let i = 0; i < artists.length; i++) {
		for (let j = 0; j < artists[i].albums.length; j++) {
			albumTitles.push(artists[i].albums[j].title);
		}
	}
	return albumTitles;
}
// console.log(getAllAlbumTitles(musicData))
/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
	const allSongs = [];

	for (let i = 0; i < artists.length; i++) {
		for (let j = 0; j < artists[i].albums.length; j++) {
			allSongs.push(...artists[i].albums[j].songs);
		}
	}
	return allSongs;
}
console.log(getAllSongs(musicData));
/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
	let board = "";
	const size = 8;

	for (let i = 1; i <= size; i++) {
		for (let j = 1; j <= size; j++) {
			board += (i + j) % 2 === 0 ? " " : "#";
		}
		board += "\n";
	}

	return board;
}
console.log(simpleCheckerBoard());
/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(row = 4, col = 4) {
	let board = "";
	for (let i = 1; i <= row; i++) {
		for (let j = 1; j <= col; j++) {
			board += (i + j) % 2 === 0 ? " " : "#";
		}
		board += "\n";
	}

	return board;
}

/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */
function createChessBoard() {
	const chessBoard = [];
	const alph = "ABCDEFGH";

	for (let i = 0; i < 8; i++) {
		const row = [];
		for (let j = 0; j < 8; j++) {
			const props = {
				piece: null,
				positionX: i,
				positionY: j,
				color: (i + j) % 2 === 0 ? "light" : "dark",
			};

			row.push(props);
		}
		chessBoard.push(row);
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
  const chessBoard = createChessBoard()
  for (let i = 0; i < chessBoard.length; i++){
    for (let j = 0; j < chessBoard[i].length; j++){
      if (i === row && j === column) {
        chessBoard[i][j].piece = piece
      }
    }
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
