<template>
    <Tile species="ant" color="blue" :player="player" />
</template>

<script>
import Tile from "./Tile.vue"
export default {
    name: "Ant",
    components: {
        Tile
    },
    props: {
        player: String
    }
};
</script>

<style scoped>

</style>