# Nested Loops

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

There are several functions with tests. You should work on creating the functionality to pass the tests.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

## Function Descriptions & Examples

While most of the functions should have enough information in the comments to create the needed functionality, some additonal information is provided about some of the functions below.

### getAllArtistNames()

The `getAllArtistNames` function should return an array of strings listing the names of the artists found in the `data.json` file.

One artist object has the following shape:

```js
  {
    "name": "Wolf Parade",
    "albums": [
      {
        "title": "At Mount Zoomer",
        "year": 2008,
        "songs": [
          "The Grey Estates",
          "Language City",
          "California Dreamer",
        ]
      },
      {
        "title": "Expo 86",
        "year": 2010,
        "songs": [
          "Yulia",
          "Two Men in New Tuxedos",
          "Palm Road",
          "Pobody's Nerfect"
        ]
      }]
  }

```

There can be any number of artists, any artist can have any number of albums and any album can have any number of songs.

### simpleChekcerBoard()

The `simpleCheckerBoard()` function should return a string of spaces and `#` symbols that represent a checkerboard. A checkerboard is 8 x 8 squares. The light squares should be represented by `" "` and the dark squares should be represented by `#`. To create a new line the characters `\n` should be added.

```js
str = str + "\n";
```

The upper left square should be `light` and the lowere right square should be `light` `" "`
When you console log your string it should look like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

### createChessBoard()

The `createChessBoard()` function should return an array of objects that rerpresent a chessboard. A chessboard is 8 x 8 squares.

The objets should have the following properties

- `piece`: null, the chesssboard should start with no pieces on it. An empty square should have a piece null by default.
- `positionX`: a number from 0 to 7 representing the row, where the top row is 0 and the bottom row is 7
- `positionY`: a number from 0 to 7 representing the column, where the left column is 0 and the right column is 7
- `color`: should be the string `light` or `dark`. The upper left square and lower right square should both be light.

Here is the expected output (`squareName` is included to help clarify the expected output but is not required):

```js
[
  [
    {
      piece: null,
      positionX: 0,
      positionY: 0,
      squareName: "A8",
      color: "light",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 1,
      squareName: "A7",
      color: "dark",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 2,
      squareName: "A6",
      color: "light",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 3,
      squareName: "A5",
      color: "dark",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 4,
      squareName: "A4",
      color: "light",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 5,
      squareName: "A3",
      color: "dark",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 6,
      squareName: "A2",
      color: "light",
    },
    {
      piece: null,
      positionX: 0,
      positionY: 7,
      squareName: "A1",
      color: "dark",
    },
  ],
  [
    {
      piece: null,
      positionX: 1,
      positionY: 0,
      squareName: "B8",
      color: "dark",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 1,
      squareName: "B7",
      color: "light",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 2,
      squareName: "B6",
      color: "dark",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 3,
      squareName: "B5",
      color: "light",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 4,
      squareName: "B4",
      color: "dark",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 5,
      squareName: "B3",
      color: "light",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 6,
      squareName: "B2",
      color: "dark",
    },
    {
      piece: null,
      positionX: 1,
      positionY: 7,
      squareName: "B1",
      color: "light",
    },
  ],
  [
    {
      piece: null,
      positionX: 2,
      positionY: 0,
      squareName: "C8",
      color: "light",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 1,
      squareName: "C7",
      color: "dark",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 2,
      squareName: "C6",
      color: "light",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 3,
      squareName: "C5",
      color: "dark",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 4,
      squareName: "C4",
      color: "light",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 5,
      squareName: "C3",
      color: "dark",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 6,
      squareName: "C2",
      color: "light",
    },
    {
      piece: null,
      positionX: 2,
      positionY: 7,
      squareName: "C1",
      color: "dark",
    },
  ],
  [
    {
      piece: null,
      positionX: 3,
      positionY: 0,
      squareName: "D8",
      color: "dark",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 1,
      squareName: "D7",
      color: "light",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 2,
      squareName: "D6",
      color: "dark",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 3,
      squareName: "D5",
      color: "light",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 4,
      squareName: "D4",
      color: "dark",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 5,
      squareName: "D3",
      color: "light",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 6,
      squareName: "D2",
      color: "dark",
    },
    {
      piece: null,
      positionX: 3,
      positionY: 7,
      squareName: "D1",
      color: "light",
    },
  ],
  [
    {
      piece: null,
      positionX: 4,
      positionY: 0,
      squareName: "E8",
      color: "light",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 1,
      squareName: "E7",
      color: "dark",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 2,
      squareName: "E6",
      color: "light",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 3,
      squareName: "E5",
      color: "dark",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 4,
      squareName: "E4",
      color: "light",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 5,
      squareName: "E3",
      color: "dark",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 6,
      squareName: "E2",
      color: "light",
    },
    {
      piece: null,
      positionX: 4,
      positionY: 7,
      squareName: "E1",
      color: "dark",
    },
  ],
  [
    {
      piece: null,
      positionX: 5,
      positionY: 0,
      squareName: "F8",
      color: "dark",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 1,
      squareName: "F7",
      color: "light",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 2,
      squareName: "F6",
      color: "dark",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 3,
      squareName: "F5",
      color: "light",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 4,
      squareName: "F4",
      color: "dark",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 5,
      squareName: "F3",
      color: "light",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 6,
      squareName: "F2",
      color: "dark",
    },
    {
      piece: null,
      positionX: 5,
      positionY: 7,
      squareName: "F1",
      color: "light",
    },
  ],
  [
    {
      piece: null,
      positionX: 6,
      positionY: 0,
      squareName: "G8",
      color: "light",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 1,
      squareName: "G7",
      color: "dark",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 2,
      squareName: "G6",
      color: "light",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 3,
      squareName: "G5",
      color: "dark",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 4,
      squareName: "G4",
      color: "light",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 5,
      squareName: "G3",
      color: "dark",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 6,
      squareName: "G2",
      color: "light",
    },
    {
      piece: null,
      positionX: 6,
      positionY: 7,
      squareName: "G1",
      color: "dark",
    },
  ],
  [
    {
      piece: null,
      positionX: 7,
      positionY: 0,
      squareName: "H8",
      color: "dark",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 1,
      squareName: "H7",
      color: "light",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 2,
      squareName: "H6",
      color: "dark",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 3,
      squareName: "H5",
      color: "light",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 4,
      squareName: "H4",
      color: "dark",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 5,
      squareName: "H3",
      color: "light",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 6,
      squareName: "H2",
      color: "dark",
    },
    {
      piece: null,
      positionX: 7,
      positionY: 7,
      squareName: "H1",
      color: "light",
    },
  ],
];
```

#### Bonus

Add another property `squareName` that represents the square name from an offical board.

The upper left square should be `a8` and the lower right should be `h1`

[Wikipedia Chessboard](https://en.wikipedia.org/wiki/Chessboard)
