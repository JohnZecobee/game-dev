import { expect } from "chai";
import { Array2d } from "../../src/logic/Array2d";

describe("Array2d", () => {
  it("returns a single row", () => {
      const tiles = [
        { id: 1, type: "Ant", player: "white", neighbours: [null,    2, null, null, null, null] },
        { id: 2, type: "Bee", player: "black", neighbours: [null,    3, null, null,    1, null] },
        { id: 3, type: "Ant", player: "white", neighbours: [null, null, null, null,    2, null] }]
      const array2d = Array2d(tiles)
      const expectedOutput = [[{id:1}, {id:2}, {id:3}]];
    expect(array2d).to.deep.equal(expectedOutput);
  });
});
