<template lang="pug">
div.full-width
  h2 {{ title || 'Judul' }}
  div.content
    slot
</template>

<script>
export default {
  name: 'FullWidth',
  props: ['title'],
};
</script>
<style lang="stylus">

</style>
