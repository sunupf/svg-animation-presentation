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
          li Use CSS
        //- a.btn(@click="alert('ok')") Morph Shape
      div.slot-section(slot='preview')
        div.image-container
          svg(:class="{morphed: step === 2}")(width="241" height="231" viewBox="0 0 241 231" fill="none" xmlns="http://www.w3.org/2000/svg")
            path(d="M80 70.5L120.5 0L161 70.5L241 88.5L186.5 149.5L195 231L120.5 198L46 231L54.5 149.5L0 88.5L80 70.5Z" fill="#FFCC00")


</template>

<script>
import { Slideshow } from 'eagle.js';
import TwoSections from '../TwoSections.vue';

export default {
  name: 'WayNumber4',
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

path
  transition d 0.35s ease-out

.morphed, svg:hover
  path
    d path("M219 116C219 169.572 175.124 213 121 213C66.8761 213 23 169.572 23 116C23 62.4284 66.8761 19 121 19C89.7651 98.8499 146.902 129.877 219 116Z")

</style>
