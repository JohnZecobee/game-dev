<template>
    <Tile species="spider" color="purple" :player="player" />
</template>

<script>
import Tile from "./Tile.vue"
export default {
    name: "Spider",
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