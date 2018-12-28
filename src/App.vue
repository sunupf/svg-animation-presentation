<template lang='pug'>
  div#app
    SlideFull
</template>

<script>
import SlideFull from './components/SlideFull.vue';

export default {
  name: 'app',
  components: {
    SlideFull,
  },
};
</script>
<style lang="stylus">
.eg-slide-content
  display flex
  align-items center
  justify-content center
  height 100%
</style>
