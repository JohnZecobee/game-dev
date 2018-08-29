<template>
  <div class="PlayerHand" :style="style">
    <Tylist
      v-for="(tile, index) in tiles"
      :key="tile.id"
      :species="tile.type"
      :player="tile.player"
      :x="index * 1.1"
      :y="0"
    />
  </div>
</template>

<script>
import Tylist from "@/components/Tylist.vue";

export default {
  name: "PlayerHand",
  props: {
    tiles: Array,
  },
  components: {
    Tylist
  },
  data: function() {
    return {
      error:false
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
        bottom: `${this.tileHeight * 0.6}px`
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