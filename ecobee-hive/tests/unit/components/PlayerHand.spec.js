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

  it("a player hand with starting single set", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: {
        player: "black",
        tiles: [
          {
            type: "Bee",
            id: 1
          },
          {
            type: "Ant",
            id: 2
          },
          {
            type: "Ant",
            id: 3
          },
          {
            type: "Ant",
            id: 4
          },
          {
            type: "Spider",
            id: 5
          },
          {
            type: "Spider",
            id: 6
          },
          {
            type: "Grasshopper",
            id: 7
          },
          {
            type: "Grasshopper",
            id: 8
          },
          {
            type: "Grasshopper",
            id: 9
          },
          {
            type: "Beetle",
            id: 10
          },
          {
            type: "Beetle",
            id: 11
          }
        ]
      }
    });
    expect(wrapper.props().tiles.length).to.equal(11);
  });
});
