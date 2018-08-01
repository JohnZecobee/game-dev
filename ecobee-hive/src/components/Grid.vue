<template>
  <div class="grid" v-if="allTilesHaveSixNeighbours()">
    <Tylist
      v-for="tile in positionifiedTiles"
      :key="tile.type"
      :species="tile.type"
      :player="tile.player"
      :x="tile.x"
      :y="tile.y"
    />
  </div>
</template>

<script>
import Tylist from "@/components/Tylist.vue";
import { normalize } from "@/logic/normalize";
import { positionify } from "@/logic/positionify";

export default {
  name: "Grid",
  props: {
    tiles: Array
  },
  components: {
    Tylist
  },
  computed: {
    positionifiedTiles: function() {
      return normalize(positionify(this.tiles));
    }
  },
  methods: {
    allTilesHaveSixNeighbours: function() {
      for (const tile of this.tiles) {
        if (tile.neighbours.length !== 6) {
          return false;
        }
      }
      return true;
    }
  }
};
</script>

<style scoped>
</style>
