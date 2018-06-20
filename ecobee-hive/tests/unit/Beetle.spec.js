import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Beetle from "@/components/Beetle.vue";
import Tile from "@/components/Tile.vue";

describe("Beetle.vue", () => {
    it("renders tile as root", () => {
        const wrapper = shallowMount(Beetle);
        expect(wrapper.find(Tile).isVisible());
        expect(wrapper.find(Tile).props().species).to.equal("beetle");
    });
});
