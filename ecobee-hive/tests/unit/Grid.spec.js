import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Grid from "@/components/Grid.vue";
import Tile from "@/components/Tile.vue";

describe("Grid.vue", () => {
  it("renders an empty grid", () => {
    const wrapper = shallowMount(Grid, {
      propsData: { tiles: [] }
    });
    expect(wrapper.props().tiles).to.be.empty;
  });

  it("renders a single tile with the correct player colour passed in", () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        tiles: [
          {
            type: "Bee",
            player: "black",
            neighbours: []
          }
        ]
      }
    });

    expect(wrapper.find(Tile).props().player).to.equal("black");
  });
});
