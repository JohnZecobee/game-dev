export const Array2d = function(tiles) {
    let output = [];
    let row = [];
    tiles.map(function(tile) {
        row.push({id:tile.id})
    }) 
    output.push(row);
    return output;
};
