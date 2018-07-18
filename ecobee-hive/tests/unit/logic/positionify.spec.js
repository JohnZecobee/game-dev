import { expect } from "chai";
import deepFreeze from "deep-freeze";

import { positionify } from "@/logic/positionify";

describe("positionify", () => {
  it("returns a single tile", () => {
    const tiles = [
      { id: 0, type: "Ant", player: "white", neighbours: [null, null, null, null, null, null] }
    ]

    deepFreeze(tiles);

    const newTiles = positionify(tiles)
    expect(newTiles[0].x).to.equal(0);
    expect(newTiles[0].y).to.equal(0);
  });
  it("returns a single row", () => {
    const tiles = [
      { id: 0, type: "Ant", player: "white", neighbours: [null, 1, null, null, null, null] },
      { id: 1, type: "Bee", player: "black", neighbours: [null, 2, null, null, 0, null] },
      { id: 2, type: "Spider", player: "white", neighbours: [null, null, null, null, 1, null] }
    ]

    deepFreeze(tiles);

    const newTiles = positionify(tiles)
    expect(newTiles[0].x).to.equal(0);
    expect(newTiles[0].y).to.equal(0);
    expect(newTiles[1].x).to.equal(1);
    expect(newTiles[1].y).to.equal(0);
    expect(newTiles[2].x).to.equal(2);
    expect(newTiles[2].y).to.equal(0);
  });
  it("returns a single row out of order", () => {
    const tiles = [
      { id: 0, type: "Ant",    player: "white", neighbours: [null,    2, null, null, null, null] },
      { id: 1, type: "Bee",    player: "black", neighbours: [null, null, null, null,    2, null] },
      { id: 2, type: "Spider", player: "white", neighbours: [null,    1, null, null,    0, null] }
    ]

    deepFreeze(tiles);

    const newTiles = positionify(tiles)
    expect(newTiles[0].x).to.equal(0);
    expect(newTiles[0].y).to.equal(0);
    expect(newTiles[1].x).to.equal(2);
    expect(newTiles[1].y).to.equal(0);
    expect(newTiles[2].x).to.equal(1);
    expect(newTiles[2].y).to.equal(0);
});
});
