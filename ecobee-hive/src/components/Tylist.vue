<template>
    <Bee
      :style="style"
      v-if="species==='Bee'" :player="player"
    />
    <Ant
      :style="style"
      v-else-if="species==='Ant'" :player="player"
    />
    <Spider
      :style="style"
      v-else-if="species==='Spider'" :player="player"
    />
    <Grasshopper
      :style="style"
      v-else-if="species==='Grasshopper'" :player="player"
    />
    <Beetle
      :style="style"
      v-else-if="species==='Beetle'" :player="player"
    />
</template>


<script>
import Bee from "@/components/Bee.vue";
import Ant from "@/components/Ant.vue";
import Spider from "@/components/Spider.vue";
import Grasshopper from "@/components/Grasshopper.vue";
import Beetle from "@/components/Beetle.vue";

export default {
  name: "Tylist",
  props: {
    species: String,
    player: String,
    x: Number,
    y: Number
  },
  methods: {},
  components: {
    Bee,
    Ant,
    Spider,
    Grasshopper,
    Beetle
  },
  computed: {
    style() {
      console.log(this.x * this.width);
      return {
        position: "absolute",
        left: `${this.x * this.width}px`,
        top: `${this.y * this.height * 1.6}px`,
      };
    },
    width() {
      return 236;
    },
    height() {
      return 272;
    },
  }
};
</script>

<style scoped>
</style>