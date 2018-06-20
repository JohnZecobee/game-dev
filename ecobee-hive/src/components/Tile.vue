<template>
  <div class="tile" @click="onclick">
    <svg class="hexagon" width="236" height="276" xmlns="http://www.w3.org/2000/svg">
      <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

      <g>
        <title>background</title>
        <rect x="-1" y="-1" width="238" height="278" id="canvas_background" fill="#ffffff" />
        <g id="canvasGrid" display="none">
          <rect id="svg_2" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)" />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <path fill="#000000" stroke-width="1.5" d="m-19.25,138.079975l58.71429,-117.428553l156.571428,0l58.714272,117.428553l-58.714272,117.428553l-156.571428,0l-58.71429,-117.428553z" id="svg_1" stroke="#000" transform="rotate(-90 117.75000000000004,138.07998657226565) " />
        <text class="tileGraphic" transform="matrix(1,0,0,1,0,0) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_3" y="146.25" x="97.984375" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ffffff">{{species}}</text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    species: String
  },
  methods: {
    onclick: function(e) {
      console.log("clicked")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />