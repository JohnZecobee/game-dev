<template>
  <div id="app">
    <Bee></Bee>
  </div>
</template>

<script>
import Bee from "./components/Bee.vue";

export default {
  name: "app",
  components: {
    Bee
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
