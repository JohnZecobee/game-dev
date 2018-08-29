<template>
  <div id="app">
    <Grid
      :tiles="tiles"
    />
    <PlayerHand
      :tiles="hand"
    />
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import PlayerHand from "./components/PlayerHand.vue";

export default {
  name: "app",
  components: {
    Grid,
    PlayerHand,
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
    hand: [
      {
        type: "Bee",
        player: "black",
        id: 1
      },
      {
        type: "Ant",
        player: "black",
        id: 2
      },
      {
        type: "Ant",
        player: "black",
        id: 3
      },
      {
        type: "Ant",
        player: "black",
        id: 4
      },
      {
        type: "Spider",
        player: "black",
        id: 5
      },
      {
        type: "Spider",
        player: "black",
        id: 6
      },
      {
        type: "Grasshopper",
        player: "black",
        id: 7
      },
      {
        type: "Grasshopper",
        player: "black",
        id: 8
      },
      {
        type: "Grasshopper",
        player: "black",
        id: 9
      },
      {
        type: "Beetle",
        player: "black",
        id: 10
      },
      {
        type: "Beetle",
        player: "black",
        id: 11
      }
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
body {
  overflow: hidden;
}
</style>
