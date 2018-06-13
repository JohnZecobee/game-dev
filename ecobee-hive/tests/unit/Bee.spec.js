import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Bee from "@/components/Bee.vue";
import Tile from "@/components/Tile.vue";

describe("Bee.vue", () => {
  it("renders tile as root", () => {
    const wrapper = shallowMount(Bee);
    expect(wrapper.find(Tile).isVisible());
    expect(wrapper.find(Tile).props().species).to.equal("bee");
  });
});
