<template>
  <div class="grid" v-if="allTilesHaveSixNeighbours()">
    <Tylist
      v-for="tile in positionifiedTiles"
      :key="tile.type"
      :species="tile.type"
      :player="tile.player"
    />
  </div>
</template>

<script>
import Tylist from "@/components/Tylist.vue";
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
      return positionify(this.tiles);
    }
  },
  methods: {
    allTilesHaveSixNeighbours: function () {
      for (const tile of this.tiles) {
        if (tile.neighbours.length!==6) {
          return false
        }
      }
      return true
    }
  }
};
</script>

<style scoped>
</style>
