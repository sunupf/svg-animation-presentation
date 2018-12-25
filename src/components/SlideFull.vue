<template lang="pug">
div#slide-full.eg-slideshow
  //- Slide Pertama
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft')
    FullWidth(title='Animation')
      | Disini adalah isi dari slide tersebut.

  //- Slide Ke-2
  slide(enterPrev='slideInLeft' enterNext='slideInRight'
    leavePrev='slideOutRight' leaveNext='slideOutLeft')
    TwoSection
      div(slot='content')
        | Ini adalah content
      div(slot='preview')
        | Ini adalah Preview

</template>

<script>
import { Slideshow } from 'eagle.js';
import FullWidth from './FullWidth.vue';
import TwoSection from './TwoSection.vue';

export default {
  name: 'SlideFull',
  components: {
    Slideshow, FullWidth, TwoSection,
  },
  mixins: [Slideshow],
};
</script>
<style lang="stylus">

</style>
