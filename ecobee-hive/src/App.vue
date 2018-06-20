<template>
  <div id="app">
    <Bee></Bee>
    <Ant></Ant>
    <Beetle></Beetle>
    <Spider></Spider>
    <Grasshopper></Grasshopper>
  </div>
</template>

<script>
import Bee from "./components/Bee.vue";
import Ant from "./components/Ant.vue";
import Beetle from "./components/Beetle.vue";
import Spider from "./components/Spider.vue";
import Grasshopper from "./components/Grasshopper.vue";
export default {
  name: "app",
  components: {
    Bee,
    Ant,
    Beetle,
    Spider,
    Grasshopper,

  }
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
