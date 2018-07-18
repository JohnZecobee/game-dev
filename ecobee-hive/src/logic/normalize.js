import { clone } from "lodash";

export const normalize = (tiles) => {
    const newTiles = tiles.map(clone);

    let lowX = 0;
    let lowY = 0;

    newTiles.forEach(tile => {
        if (tile.x < lowX) lowX = tile.x;
        if (tile.y < lowY) lowY = tile.y;
    })

    newTiles.forEach(tile => {
        tile.x -= lowX;
        tile.y -= lowY;
    })

    return newTiles;
}