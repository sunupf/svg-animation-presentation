<template lang="pug">
div.full-width
  slot
</template>

<script>
export default {
  name: 'FullWidth',
};
</script>
<style lang="stylus">
.full-width
  background-image url('../assets/images/grid.svg')
  height 100%
  width 100%
  h2
    font-family "metropolisregular", sans-serif
    text-transform uppercase
</style>
