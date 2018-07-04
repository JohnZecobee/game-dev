<template>
    <Bee
     v-if="species==='Bee'" :player="player"
    />
    <Ant
     v-else-if="species==='Ant'" :player="player"
    />
    <Spider
     v-else-if="species==='Spider'" :player="player"
    />
    <Grasshopper
     v-else-if="species==='Grasshopper'" :player="player"
    />
    <Beetle
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
    player: String
  },
  methods: {

  },
  components: {
      Bee,
      Ant,
      Spider,
      Grasshopper,
      Beetle
  }
};
</script>