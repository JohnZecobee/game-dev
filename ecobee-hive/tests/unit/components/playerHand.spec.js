import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import playerHand from "@/components/playerHand.vue";

it("renders an empty playerHand", () => {
  const wrapper = shallowMount(playerHand, {
    propsData: { tiles: [] }
  });
  expect(wrapper.props().tiles).to.be.empty;
});
