<template lang="pug">
div#slide-full.eg-slideshow
  //- Slide Pertama
  Title(:inserted='true')

  //- Slide Ke-2
  RasterVSVector(:inserted='true')

  //- Slide Ke-3
  SVGForm(:inserted='true')
  
  //- Slide Ke-4
  AnimationCSS(:inserted='true')

  //- Slide Ke-5
  AnimationMorph(:inserted='true')
  
  //- Slide Ke-6
  WayNumber1(:inserted='true')
  
  //- Slide Ke-7
  WayNumber2(:inserted='true')
  
  //- Slide Ke-7
  WayNumber3(:inserted='true')
  
  //- Slide Ke-8
  WayNumber4(:inserted='true')
  
  //- Slide Ke-9
  WayNumber5(:inserted='true')
  
  //- Slide Ke-10
  WayNumber6(:inserted='true')

</template>

<script>
import { Slideshow } from 'eagle.js';
import Title from './slides/Title.vue';
import RasterVSVector from './slides/RasterVSVector.vue';
import SVGForm from './slides/SVGForm.vue';
import AnimationCSS from './slides/AnimationCSS.vue';
import AnimationMorph from './slides/AnimationMorph.vue';
import WayNumber1 from './slides/WayNumber1.vue';
import WayNumber2 from './slides/WayNumber2.vue';
import WayNumber3 from './slides/WayNumber3.vue';
import WayNumber4 from './slides/WayNumber4.vue';
import WayNumber5 from './slides/WayNumber5.vue';
import WayNumber6 from './slides/WayNumber6.vue';

export default {
  name: 'SlideFull',
  components: {
    Slideshow, Title, RasterVSVector, SVGForm, AnimationCSS, AnimationMorph, WayNumber1, WayNumber2, WayNumber3, WayNumber4, WayNumber5, WayNumber6,
  },
  mixins: [Slideshow],
};
</script>
<style lang="stylus">

</style>
