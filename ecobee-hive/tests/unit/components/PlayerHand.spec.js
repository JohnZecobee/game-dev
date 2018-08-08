import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import PlayerHand from "@/components/PlayerHand.vue";

describe("PlayerHand.Vue", () => {
  it("renders an empty PlayerHand", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: {
        player: "black",
        tiles: []
      }
    });
    expect(wrapper.props().tiles).to.be.empty;
  });

  it("a player hand with a single tile", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: {
        player: "black",
        tiles: [
          {
            type: "Bee",
            id: 1
          }
        ]
      }
    });
    expect(wrapper.props().tiles.length).to.equal(1);
  });
});
