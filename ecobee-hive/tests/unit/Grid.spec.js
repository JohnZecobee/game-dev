import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Grid from "@/components/Grid.vue";
import Tylist from "@/components/Tylist.vue";

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

    expect(wrapper.find(Tylist).props().player).to.equal("black");
  });
});
