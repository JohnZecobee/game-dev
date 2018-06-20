<template>
  <Tile species="bee" color="yellow" :player="player" />
</template>

<script>
import Tile from "./Tile.vue";

export default {
  name: "Bee",
  components: {
    Tile
  },
  props: {
    player: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped/>