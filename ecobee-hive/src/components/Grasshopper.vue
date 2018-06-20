<template>
    <Tile species="grasshopper" color="green" :player="player" />
</template>

<script>
import Tile from "./Tile.vue"
export default {
    name: "Grasshopper",
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