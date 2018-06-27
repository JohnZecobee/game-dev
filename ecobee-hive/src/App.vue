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
      { id: 1, type: "Ant", player: "white", neighbours: [null,    2, null, null, null, null] },
      { id: 2, type: "Bee", player: "black", neighbours: [null,    3, null, null,    1, null] },
      { id: 3, type: "Ant", player: "white", neighbours: [null, null, null, null,    2, null] }
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
