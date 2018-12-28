<template lang="pug">
//- Slide Ke-3
div
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft'
    :steps='2')
    TwoSections(
      content-title="Change SVG a Bit"
      preview-title="Preview"
      :title-content-centered='false'
      :title-content-uppercase='false'
      :title-preview-centered='true'
      :title-preview-uppercase='true'
    )
      div.slot-section(slot='content')
        ul
          li We have Star
          li We want it to be Moon
          li Vice Versa
          li Use JS - Snap.svg
        //- a.btn(@click="alert('ok')") Morph Shape
      div.slot-section(slot='preview')
        div.image-container
          svg#morph-shape(width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg")
            path#star-shape(d="M139 134.5L179.5 64L220 134.5L300 152.5L245.5 213.5L254 295L179.5 262L105 295L113.5 213.5L59 152.5L139 134.5Z" fill="#FFCC00")


</template>

<script>
import { Slideshow } from 'eagle.js';
import TwoSections from '../TwoSections.vue';
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

export default {
  name: 'WayNumber6',
  components: {
    TwoSections,
  },
  mixins: [Slideshow],
  data() {
    return {
      isMorphed: false,
    };
  },
  methods: {
    morphShape() {
      this.isMorphed = !this.isMorphed;
    },
  },
  watch: {
  	'step': function(newVal, oldVal) {
      if (newVal === 2) {
        var svg = document.getElementById("morph-shape");
        // var s = Snap(svg);
        var star = Snap.select('#star-shape');
        star.animate({ d: "M278 177C278 230.572 234.124 274 180 274C125.876 274 82 230.572 82 177C82 123.428 125.876 80 180 80C148.765 159.85 205.902 190.877 278 177Z" }, 1000, mina.backout);
      }
      if (newVal === 1) {
        var svg = document.getElementById("morph-shape");
        // var s = Snap(svg);
        var star = Snap.select('#star-shape');
        star.animate({ d: "M139 134.5L179.5 64L220 134.5L300 152.5L245.5 213.5L254 295L179.5 262L105 295L113.5 213.5L59 152.5L139 134.5Z" }, 1000, mina.backout);
      }
    }
  },
};
</script>
<style lang="stylus" scoped>
.image-container
  display flex
  justify-content center
  align-items center
  height 100%

.preview
  svg
    display block
</style>
