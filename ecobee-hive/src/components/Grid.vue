<template>
  <div class="grid">
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
  }
};
</script>

<style scoped>
</style>
