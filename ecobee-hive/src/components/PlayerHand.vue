<template>
  <div>
  <div v-for="(tile, index) in tiles" :key="tile.id" class="PlayerHand" :style="style">
    <PlayerHandTile
      :tile="tile"
      :x="index * 1.1"
    />
  </div>
  </div>
</template>

<script>
import PlayerHandTile from "@/components/PlayerHandTile.vue";

export default {
  name: "PlayerHand",
  props: {
    tiles: Array,
  },
  components: {
    PlayerHandTile
  },
  data: function() {
    return {
      error: false,
      offset: 0,
    };
  },
  created: function() {
    for (const tile of this.tiles) {
      for (const tile2 of this.tiles) {
        if (tile !== tile2 && tile.id === tile2.id) {
          console.log(this.error)
          this.error = "Duplicate tile ids";
        }
      }
    }
  },
  computed: {
    style() {
      return {
        position: "absolute",
        bottom: `${this.tileHeight * 0.6 - this.offset}px`
      };
    },
    tileHeight() {
      return 272
    }
  }
};
</script>

<style scoped>
</style>