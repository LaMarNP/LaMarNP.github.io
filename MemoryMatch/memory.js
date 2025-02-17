let map = [];
let tile1 = null, tile2 = null;

const loadMap = (rows = 4, cols = 4) => {
    let maxVal = (rows * cols)/ 2;
    let matches = [];
    for(let i = 0; i < maxVal; i++){
        matches.push(i + 1);
        matches.push(i + 1);
    }
    return matches;
}
const shuffle = (matches) => {
    for (let i = matches.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     let temp = matches[i];
     matches[i] = matches[j];
     matches[j] = temp;
      }
    //This takes the numbers from the shuffled array and puts them in the 2d array.
    arraySize = Math.sqrt(matches.length);
    for(i = 0; i < arraySize; i++){
        map.push(matches.splice(0,arraySize));
    }
    return map;
}

const makeBoard = (rows = 4, cols = 4) => {
    let output = '<table>';
    for (let row = 0; row < rows; row++) {
     output += '<tr>';
     for (let col = 0; col < cols; col++) {
     output += '<td><button' +
        ' class="tile"' +
        ' id="' + row + '_' + col + '"' +
        ' onclick="process(' + row + ',' + col + ')">' +
        '</button></td>';
     }
     output += '</tr>';
}
document.getElementById('gameBoard').innerHTML = output + '</table>';
}

const resetBoard = () => {
    map = [];
    //let newBoard =
    shuffle(loadMap(4, 4));
    //maps = newBoard;
    makeBoard(4, 4);
}

const process = (row, col) => {
    let clicked_tile = document.getElementById(row + '_' + col);
    // Clicked tile not already contains data
    if (!Boolean(clicked_tile.innerHTML)){
        // Tile 1 not yet selected
        if (!tile1) { tile1 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
        }
        // Tile 2 not yet selected
        else if (!tile2) {
            tile2 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
            setTimeout(checkMatch, 1000);
    // TODO: Set timeout callback function
        }
    }
}

const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
     tile1.hidden = true; tile2.hidden = true;
    }
    tile1.innerHTML = '';
    tile2.innerHTML = '';
    tile1 = tile2 = null;
}



