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
      { id: 0, type: "Ant",    player: "white", neighbours: [null, null,    1, null,    5, null] },
      { id: 1, type: "Bee",    player: "black", neighbours: [null, null, null,    2, null,    0] },
      { id: 2, type: "Spider", player: "white", neighbours: [   1, null, null, null,    3, null] },
      { id: 3, type: "Spider", player: "black", neighbours: [null,    2, null, null, null,    4] },
      { id: 4, type: "Beetle", player: "white", neighbours: [   5, null,    3, null, null, null] },
      { id: 5, type: "Spider", player: "black", neighbours: [null,    0, null,    4, null, null] },
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
