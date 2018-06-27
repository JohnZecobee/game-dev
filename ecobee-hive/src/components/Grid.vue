<template>
  <div class="grid">
    <Tile
      v-for="tile in tiles"
      :key="tile.type"
      :species="tile.type"
      :player="tile.player"
    />
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";

export default {
  name: "Grid",
  props: {
    tiles: Array
  },
  components: {
    Tile
  }
};
</script>

<style scoped>
</style>
