<template>
<div
  @mouseover="yOffset = -0.2"
  @mouseout="yOffset = 0"
>
  <Tylist
    
    :species="tile.type"
    :player="tile.player"
    :x="x"
    :y="yOffset"
  />
  </div>
</template>

<script>
import Tylist from "@/components/Tylist.vue";

export default {
  name: "PlayerHand",
  props: {
    tile: Object,
    x: Number
  },
  components: {
    Tylist
  },
  data() {
    return {
      yOffset: 0
    }
  },
};
</script>

<style scoped>
</style>