import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Grasshopper from "@/components/Grasshopper.vue";
import Tile from "@/components/Tile.vue";

describe("Grasshopper.vue", () => {
    it("renders tile as root", () => {
        const wrapper = shallowMount(Grasshopper);
        expect(wrapper.find(Tile).isVisible());
        expect(wrapper.find(Tile).props().species).to.equal("grasshopper");
    });
});
