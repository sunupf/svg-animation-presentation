<template lang="pug">
//- Slide Ke-3
div
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft')
    TwoSections(
      content-title="SVG is a XML File"
      preview-title="Preview"
      :title-content-centered='false'
      :title-content-uppercase='false'
      :title-preview-centered='true'
      :title-preview-uppercase='true'
    )
      div.slot-section(slot='content')
        br
        img(width="80%" src='../../assets/images/svg-form.svg')
      div.slot-section(slot='preview')
        div.image-container
          svg(width="360" height="360" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg")
            path(d="M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 -1.62735e-05 120 -1.62735e-05C53.7258 -1.62735e-05 -0.000150812 53.7258 -0.000150812 120C-0.000150812 186.274 53.7258 240 120 240Z" fill="#FFCC00")
            path(d="M119.978 120C98.8475 120.03 78.0963 125.589 59.8045 136.12C41.5127 146.65 26.3227 161.783 15.7575 180C26.3225 198.217 41.5122 213.349 59.8039 223.879C78.0956 234.41 98.8464 239.97 119.977 240C141.115 239.978 161.875 234.423 180.176 223.891C198.476 213.36 213.674 198.223 224.243 180C213.674 161.776 198.476 146.639 180.176 136.108C161.876 125.577 141.116 120.022 119.978 120Z" fill="#FF7F2A")

</template>

<script>
import { Slideshow } from 'eagle.js';
import TwoSections from '../TwoSections.vue';

export default {
  name: 'SVGForm',
  components: {
    TwoSections,
  },
  mixins: [Slideshow],
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
