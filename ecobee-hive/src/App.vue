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
      { type: "Ant", player: "white", neighbours: [] },
      { type: "Bee", player: "black", neighbours: [] },
      { type: "Ant", player: "white", neighbours: [] }
    ]
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
