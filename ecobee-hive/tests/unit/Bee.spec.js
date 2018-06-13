import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Bee from "@/components/Bee.vue";

describe("Bee.vue", () => {
  it("renders bee when passed", () => {
    const wrapper = shallowMount(Bee);
    expect(wrapper.text()).to.include("Bee");
  });
});
