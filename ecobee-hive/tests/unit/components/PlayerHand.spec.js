import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import PlayerHand from "@/components/PlayerHand.vue";

describe("PlayerHand.Vue", () => {
  it("renders an empty PlayerHand", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: {
        tiles: []
      }
    });
    expect(wrapper.props().tiles).to.be.empty;
  });

  it("a player hand with a single tile", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: {
        tiles: [
          {
            type: "Bee",
            player: "black",
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
        tiles: [
          {
            type: "Bee",
            player: "black",
            id: 1
          },
          {
            type: "Ant",
            player: "black",
            id: 2
          },
          {
            type: "Ant",
            player: "black",
            id: 3
          },
          {
            type: "Ant",
            player: "black",
            id: 4
          },
          {
            type: "Spider",
            player: "black",
            id: 5
          },
          {
            type: "Spider",
            player: "black",
            id: 6
          },
          {
            type: "Grasshopper",
            player: "black",
            id: 7
          },
          {
            type: "Grasshopper",
            player: "black",
            id: 8
          },
          {
            type: "Grasshopper",
            player: "black",
            id: 9
          },
          {
            type: "Beetle",
            player: "black",
            id: 10
          },
          {
            type: "Beetle",
            player: "black",
            id: 11
          }
        ]
      }
    });
    expect(wrapper.props().tiles.length).to.equal(11);
  });

  it("error is thrown when tiles with duplicate ids are given", () => {
    const wrapper = shallowMount(PlayerHand, {
        propsData: {
          tiles: [
            {
              type: "Beetle",
              player: "black",
              id: 10
            },
            {
              type: "Beetle",
              player: "black",
              id: 10
            }
          ]
        }
      });
    expect(wrapper.vm.$data.error).to.equal("Duplicate tile ids");

  });
});
