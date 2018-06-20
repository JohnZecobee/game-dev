import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Ant from "@/components/Ant.vue";
import Tile from "@/components/Tile.vue";

describe("Ant.vue", () => {
    it("renders tile as root", () => {
        const wrapper = shallowMount(Ant);
        expect(wrapper.find(Tile).isVisible());
        expect(wrapper.find(Tile).props().species).to.equal("ant");
    });
});
