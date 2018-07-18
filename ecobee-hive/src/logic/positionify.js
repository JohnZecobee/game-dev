import { clone } from "lodash";

/*
{ id: 0, type: "Ant", player: "white", neighbours: [null,    1, null, null, null, null] },
{ id: 1, type: "Bee", player: "black", neighbours: [null,    2, null, null,    0, null] },
{ id: 2, type: "Spi", player: "white", neighbours: [null, null, null, null,    1, null] }]
*/

const directions = [
    {dx: 0.5, dy:-0.5}, // up-right
    {dx: 1, dy:0}, // right
    {dx: 0.5, dy:0.5}, // down-right
    {dx: -0.5, dy:0.5}, //down-left
    {dx: -1, dy:0}, //left
    {dx: -0.5, dy:-0.5} //up-left
]



const _positionify = function(tiles, id, x, y) {
    if (id === undefined) {id = 0;}
    if (x === undefined) {x = 0;}
    if (y === undefined) {y = 0;}
    let tile = tiles[id];
    tile.x = x, tile.y = y;
    tile.neighbours.map(function(neighbour_id, d) {
        if (neighbour_id) {
            let neighbourTile = tiles[neighbour_id]
            if (neighbourTile.x === undefined) {
                _positionify(tiles, neighbourTile.id, x+directions[d].dx, y+directions[d].dy)
            }
        }
    });
};

export const positionify = function(tiles) {
    const cloneTiles = tiles.map(clone);
    if (tiles.length === 0) return cloneTiles;
    _positionify(cloneTiles);
    return cloneTiles;
}
