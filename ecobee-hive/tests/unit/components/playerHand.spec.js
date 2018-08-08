import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import PlayerHand from "@/components/PlayerHand.vue";

describe("PlayerHand.Vue", () => {
  it("renders an empty PlayerHand", () => {
    const wrapper = shallowMount(PlayerHand, {
      propsData: { tiles: [] }
    });
    expect(wrapper.props().tiles).to.be.empty;
  });
});
