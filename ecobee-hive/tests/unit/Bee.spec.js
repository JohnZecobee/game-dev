import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Bee from "@/components/Bee.vue";
import sinon from "sinon";

describe("Bee.vue", () => {
  it("renders bee when passed", () => {
    const wrapper = shallowMount(Bee);
    expect(wrapper.html()).to.include("bee");
  });

  it("renders a hexagon when passed", () => {
    const wrapper = shallowMount(Bee);
    expect(wrapper.find(".hexagon").isVisible());
  });

  it("should call onclick when clicked", () => {
    var spy = sinon.spy(Bee.methods, "onclick");
    const bee = shallowMount(Bee);
    bee.trigger("click");
    expect(spy.called).to.be.true;
  });
});
