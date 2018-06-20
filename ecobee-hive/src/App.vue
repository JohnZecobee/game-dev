<template>
  <div id="app">
    <Bee player="white"></Bee>
    <Bee player="black"></Bee>
    <Ant player="white"></Ant>
    <Ant player="black"></Ant>
    <Beetle player="white"></Beetle>
    <Beetle player="black"></Beetle>
    <Spider player="white"></Spider>
    <Spider player="black"></Spider>
    <Grasshopper player="white"></Grasshopper>
    <Grasshopper player="black"></Grasshopper>
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
