<template>
  <div class="grid" v-if="allTilesHaveSixNeighbours()">
    <Tylist
      v-for="tile in tiles"
      :key="tile.type"
      :species="tile.type"
      :player="tile.player"
    />
  </div>
</template>

<script>
import Tylist from "@/components/Tylist.vue";

export default {
  name: "Grid",
  props: {
    tiles: Array
  },
  components: {
    Tylist
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
