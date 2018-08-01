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
        top: `${this.y * this.height}px`,
      };
    },
    width() {
      return 238;
    },
    height() {
      return 238;
    },
  }
};
</script>

<style scoped>
.tileF {
  position: absolute;
  left: 0;
  top: 0;
}
</style>