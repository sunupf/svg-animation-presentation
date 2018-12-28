<template lang="pug">
//- Slide Ke-3
div
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft'
    :steps='2')
    TwoSections(
      content-title="Animation using JS"
      preview-title="Preview"
      :title-content-centered='false'
      :title-content-uppercase='false'
      :title-preview-centered='true'
      :title-preview-uppercase='true'
    )
      div.slot-section(slot='content')
        ul
          li We have Star
          li We want it to be Check
          li Vice Versa
          li Use JS - Anime.js
        //- a.btn(@click="alert('ok')") Morph Shape
      div.slot-section(slot='preview')
        div.image-container
          svg(width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg")
            path#star-shape(d="M139 134.5L179.5 64L220 134.5L300 152.5L245.5 213.5L254 295L179.5 262L105 295L113.5 213.5L59 152.5L139 134.5Z" fill="#FFCC00")


</template>

<script>
import { Slideshow } from 'eagle.js';
import TwoSections from '../TwoSections.vue';
import anime from 'animejs'

export default {
  name: 'WayNumber3',
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
        anime({
          targets: '#star-shape',
          d: 'M131.5 196L161.5 219.5L209 150.5L267.5 64L296 104.5L227.5 208.5L172.5 293L108 237L63 199L87 161L131.5 196Z',
        });
      }
      if (newVal === 1) {
        anime({
          targets: '#star-shape',
          d: 'M139 134.5L179.5 64L220 134.5L300 152.5L245.5 213.5L254 295L179.5 262L105 295L113.5 213.5L59 152.5L139 134.5Z',
        });
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
