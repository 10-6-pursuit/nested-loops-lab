const {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
} = require("../");
const musicData = require("../data.json");
const allSongs = require("../songs.json");
const chessBoardObjects = require("../chessboardObjects.json");
const extraArtistObject = {
  name: "Wolf Parade",
  albums: [
    {
      title: "At Mount Zoomer",
      year: 2008,
      songs: ["The Grey Estates", "Language City", "California Dreamer"],
    },
    {
      title: "Expo 86",
      year: 2010,
      songs: [
        "Yulia",
        "Two Men in New Tuxedos",
        "Palm Road",
        "Pobody's Nerfect",
      ],
    },
  ],
};

musicData.splice(3, 0, extraArtistObject);

describe("getAllArtistNames()", () => {
  test("it should return an array of artist names", () => {
    // checks for return value
    const actual = getAllArtistNames(musicData);
    const expected = [
      "Dolly Parton",
      "Mojave 3",
      "Neko Case",
      "Wolf Parade",
      "Destroyer",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("getAllAlbumTitles()", () => {
  test("it should return a an array of all albums.", () => {
    // checks for return value
    const actual = getAllAlbumTitles(musicData);
    const expected = [
      "Hello, I'm Dolly",
      "Coat of Many Colors",
      "Jolene",
      "Love is Like a Butterfly",
      "9 to 5 and Odd Jobs",
      "Ask Me Tomorrow",
      "Out of Tune",
      "Excuses for Travelers",
      "Spoon and Rafter",
      "Puzzles Like You",
      "The Tigers Have Spoken",
      "Fox Confessor Brings the Flood",
      "Middle Cyclone",
      "The Worse Things Get, the Harder I Fight, the More I Love You",
      "At Mount Zoomer",
      "Expo 86",
      "Streethawk",
      "Trouble in Dreams",
      "Destroyer's Rubies",
      "Have We Met",
      "Five Spanish Songs",
      "Labyrinthitis",
    ];

    expect(actual).toEqual(expected);
  });
});

describe("getAllSongs()", () => {
  test("it should return a an array of all songs.", () => {
    // checks for return value
    const actual = getAllSongs(musicData);
    const expected = allSongs;
    expect(actual).toEqual(expected);
  });
});

describe("simpleCheckerBoard()", () => {
  test("it should return a string that represents a checkerboard that is 8x8", () => {
    // checks for return value
    const actual = JSON.stringify(simpleCheckerBoard());
    const expected = JSON.stringify(
      " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n"
    );
    expect(actual).toEqual(expected);
  });
});

describe("dynamicCheckerBoard()", () => {
  test("it should return a string that represents a checkerboard that by default 4 x 4", () => {
    // checks for return value
    const actual = JSON.stringify(dynamicCheckerBoard());
    const expected = JSON.stringify(" # #\n# # \n # #\n# # \n");
    expect(actual).toEqual(expected);
  });
  test("it should return a string that represents a checkerboard that is 8 x 8", () => {
    // checks for return value
    const actual = JSON.stringify(dynamicCheckerBoard(8, 8));
    const expected = JSON.stringify(
      " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n"
    );
    expect(actual).toEqual(expected);
  });
  test("it should return a string that represents a checkerboard that is 16 x 4", () => {
    // checks for return value
    const actual = JSON.stringify(dynamicCheckerBoard(16, 4));
    const expected = JSON.stringify(
      " # #\n# # \n # #\n# # \n # #\n# # \n # #\n# # \n # #\n# # \n # #\n# # \n # #\n# # \n # #\n# # \n"
    );
    expect(actual).toEqual(expected);
  });
});

describe.only("createChessBoard()", () => {
  test("it should return an array of square objects that represent a chessboard", () => {
    // checks for return value
    const actual = createChessBoard();
    const expected = chessBoardObjects;
    expect(actual).toEqual(expected);
  });
});

describe("addPieceToChessBoard()", () => {
  test("it should return the updated chessboard", () => {
    // checks for return value
    const actual = addPieceToChessBoard("pawn", 0, 0);
    chessBoardObjects[0][0].piece = "pawn";
    const expected = chessBoardObjects;
    expect(actual).toEqual(expected);
  });

  test("it should return the updated chessboard", () => {
    // checks for return value
    const actual = addPieceToChessBoard("rook", 3, 5);
    chessBoardObjects[0][0].piece = null;
    chessBoardObjects[3][5].piece = "rook";
    const expected = chessBoardObjects;
    expect(actual).toEqual(expected);
  });
});
