import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Tile from "@/components/Tile.vue";
import sinon from "sinon";

describe("Tile.vue", () => {
  it("renders a hexagon when passed", () => {
    const wrapper = shallowMount(Tile);
    expect(wrapper.find(".hexagon").isVisible());
  });

  it("should call onclick when clicked", () => {
    var spy = sinon.spy(Tile.methods, "onclick");
    const tile = shallowMount(Tile);
    tile.trigger("click");
    expect(spy.called).to.be.true;
  });
});
