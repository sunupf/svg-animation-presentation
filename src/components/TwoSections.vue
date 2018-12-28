<template lang="pug">
div.two-section
  div.content.section
    h4(:class="{'text__centered':titleContentCentered, 'text__uppercase':titleContentUppercase}")
      | {{ contentTitle || 'Content' }}
    slot(name='content')
  div.preview.section
    h4(:class="{'text__centered':titlePreviewCentered, 'text__uppercase':titlePreviewUppercase}")
      | {{ previewTitle || 'Preview' }}
    slot(name='preview')
</template>

<script>
export default {
  name: 'TwoSections',
  props: [
    'contentTitle',
    'previewTitle',
    'titleContentCentered',
    'titlePreviewCentered',
    'titleContentUppercase',
    'titlePreviewUppercase',
  ],
};
</script>
<style lang="stylus">
.two-section
  width 100%
  height 100%
  display flex
  flex-direction row
  justify-content flex-start
  align-items flex-start

  .section
    width 50%
    height calc(100% - 120px)
    padding 60px

  .preview
    background-image url('../assets/images/grid.svg')

  h4
    font-family "metropolisbold", sans-serif

  .content
    background-color #333
    color #fff
</style>
