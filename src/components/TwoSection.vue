<template lang="pug">
div.full-width
  div.content
    h3 {{ contentTitle || 'Content' }}
    slot(name='content')
  div.preview
    h3 {{ previewTitle || 'Preview' }}
    slot(name='preview')
</template>

<script>
export default {
  name: 'TwoSection',
  props: ['contentTitle', 'previewTitle'],
};
</script>
<style lang="stylus">

</style>
