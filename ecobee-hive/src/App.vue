<template>
  <div id="app">
    <Grid
      :tiles="tiles"
    />
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
export default {
  name: "app",
  components: {
    Grid
  },
  data: () => ({
    tiles: [
      { id: 0, type: "Ant", player: "white", neighbours: [null,    1, null, null, null, null] },
      { id: 1, type: "Bee", player: "black", neighbours: [null,    2, null, null,    0, null] },
      { id: 2, type: "Ant", player: "white", neighbours: [null, null, null, null,    1, null] }
    ],
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
