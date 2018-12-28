<template lang="pug">
//- Slide Ke-3
div
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft'
    :steps='2')
    TwoSections(
      content-title="Change the SVG a Bit"
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
          li Use SMIL
        //- a.btn(@click="alert('ok')") Morph Shape
      div.slot-section(slot='preview')
        div.image-container
          svg(width="241" height="231" viewBox="0 0 241 231" fill="none" xmlns="http://www.w3.org/2000/svg")
            path(id="star-shape" d="M80 70.5L120.5 0L161 70.5L241 88.5L186.5 149.5L195 231L120.5 198L46 231L54.5 149.5L0 88.5L80 70.5Z" fill="#FFCC00")
            animate(
              xlink:href="#star-shape"
              attributeName="d"
              dur="320ms"
              begin="click"
              fill="freeze"
              to="M219 116C219 169.572 175.124 213 121 213C66.8761 213 23 169.572 23 116C23 62.4284 66.8761 19 121 19C89.7651 98.8499 146.902 129.877 219 116Z"
            )


</template>

<script>
import { Slideshow } from 'eagle.js';
import TwoSections from '../TwoSections.vue';

export default {
  name: 'WayNumber5',
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
        document.querySelector(".image-container svg animate").beginElement()
      }
      // if (newVal === 3) {
      //   anime({
      //     targets: '#star-shape',
      //     d: 'M56.0636 50.9089L64 36.1783L71.9364 50.9089C72.277 51.5412 72.8847 51.9919 73.5973 52.127L89.9249 55.222L78.5015 67.4527C78.0104 67.9785 77.7823 68.6953 77.8732 69.4047L80.01 86.0742L65.0326 78.8775C64.3796 78.5637 63.6203 78.5637 62.9673 78.8775L47.99 86.0742L50.1268 69.4047C50.2178 68.6953 49.9896 67.9785 49.4985 67.4527L38.0751 55.222L54.4027 52.127C55.1153 51.9919 55.723 51.5412 56.0636 50.9089ZM90.6588 54.4362L90.658 54.4371L90.6588 54.4362Z',
      //   });
      // }
    },
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
