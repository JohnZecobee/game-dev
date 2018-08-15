<template>
<div class="PlayerHand"></div>
</template>

<script>
export default {
  name: "PlayerHand",
  props: {
    tiles: Array,
    
  },
  data: function() {
    return {
      error:false
    };
  },
  created: function() {
    for (const tile of this.tiles) {
      for (const tile2 of this.tiles) {
        if (tile !== tile2 && tile.id === tile2.id) {
          console.log(this.error)
          this.error = "Duplicate tile ids";
        }
      }
    }
  }
};
</script>

<style scoped>
</style>