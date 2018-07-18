import { expect } from "chai";
import { positionify } from "@/logic/positionify";

describe("positionify", () => {
  it("returns a single tile", () => {
    const tiles = [
      { id: 0, type: "Ant", player: "white", neighbours: [null, null, null, null, null, null] }]
    positionify(tiles)
    expect(tiles[0].x).to.equal(0);
    expect(tiles[0].y).to.equal(0);
  });
  it("returns a single row", () => {
      const tiles = [
        { id: 0, type: "Ant", player: "white", neighbours: [null,    1, null, null, null, null] },
        { id: 1, type: "Bee", player: "black", neighbours: [null,    2, null, null,    0, null] },
        { id: 2, type: "Spider", player: "white", neighbours: [null, null, null, null,    1, null] }]
      positionify(tiles)
      expect(tiles[0].x).to.equal(0);
      expect(tiles[0].y).to.equal(0);
      expect(tiles[1].x).to.equal(1);
      expect(tiles[1].y).to.equal(0);
      expect(tiles[2].x).to.equal(2);
      expect(tiles[2].y).to.equal(0);
  });
  it("returns a single row out of order", () => {
    const tiles = [
      { id: 0, type: "Ant", player: "white", neighbours: [null,    2, null, null, null, null] },
      { id: 1, type: "Bee", player: "black", neighbours: [null, null, null, null,    2, null] },
      { id: 2, type: "Spider", player: "white", neighbours: [null,    1, null, null,    0, null] }]
    positionify(tiles)
    expect(tiles[0].x).to.equal(0);
    expect(tiles[0].y).to.equal(0);
    expect(tiles[1].x).to.equal(2);
    expect(tiles[1].y).to.equal(0);
    expect(tiles[2].x).to.equal(1);
    expect(tiles[2].y).to.equal(0);
});
});
