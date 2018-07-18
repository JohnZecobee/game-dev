import { expect } from "chai";
import deepFreeze from "deep-freeze";

import { normalize } from "@/logic/normalize";

describe("normalize", () => {
    it("should normalize values of coordinates", () => {
        const tiles = [
            { x: 1, y: -4 },
            { x: -1, y: 2 },
        ];

        deepFreeze(normalize);
        const newTiles = normalize(tiles);

        expect(newTiles[0].x).to.equal(2);
        expect(newTiles[0].y).to.equal(0);
        expect(newTiles[1].x).to.equal(0);
        expect(newTiles[1].y).to.equal(6);
    })
})