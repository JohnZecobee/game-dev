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

  it("returns a circle", () => {
    const tiles = [
      { id: 0, type: "Ant",    player: "white", neighbours: [null, null,    1, null,    5, null] },
      { id: 1, type: "Bee",    player: "black", neighbours: [null, null, null,    2, null,    0] },
      { id: 2, type: "Spider", player: "white", neighbours: [   1, null, null, null,    3, null] },
      { id: 3, type: "Spider", player: "black", neighbours: [null,    2, null, null, null,    4] },
      { id: 4, type: "Beetle", player: "white", neighbours: [   5, null,    3, null, null, null] },
      { id: 5, type: "Spider", player: "black", neighbours: [null,    0, null,    4, null, null] },
    ];

    const newTiles = positionify(tiles);
    expect(newTiles[0].x).to.equal(0);
    expect(newTiles[0].y).to.equal(0);
    expect(newTiles[1].x).to.equal(0.5);
    expect(newTiles[1].y).to.equal(0.5);
    expect(newTiles[2].x).to.equal(0);
    expect(newTiles[2].y).to.equal(1);
    expect(newTiles[3].x).to.equal(-1);
    expect(newTiles[3].y).to.equal(1);
    expect(newTiles[4].x).to.equal(-1.5);
    expect(newTiles[4].y).to.equal(0.5);
    expect(newTiles[5].x).to.equal(-1);
    expect(newTiles[5].y).to.equal(0);
  });
});
