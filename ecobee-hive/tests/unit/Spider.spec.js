import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Spider from "@/components/Spider.vue";
import Tile from "@/components/Tile.vue";

describe("Spider.vue", () => {
    it("renders tile as root", () => {
        const wrapper = shallowMount(Spider);
        expect(wrapper.find(Tile).isVisible());
        expect(wrapper.find(Tile).props().species).to.equal("spider");
    });
});
