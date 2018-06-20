<template>
    <Tile species="beetle" color="brown" :player="player" />
</template>

<script>
import Tile from "./Tile.vue";

export default {
    name: "Beetle",
    components: {
        Tile
    },
    props: {
        player: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped/>