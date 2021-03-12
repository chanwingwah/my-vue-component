<template>
  <div class="wrapper">
    <div>
      <my-icon name="refresh"></my-icon>
      <my-icon name="setting" style="font-size:20px"></my-icon>
      <my-icon name="loading" style="font-size:30px"></my-icon>
      <my-icon name="picture-outline" style="color:red;font-size:40px"></my-icon>
      <my-icon name="star-off" class-name="fontFize50"></my-icon>
      <style>
        .fontFize50 {
          font-size:50px
        }
      </style>
    </div>
  </div>
</template>
<script>
import MyIcon from '../../../src/icon/icon'
import svgIcons from '../../../src/icon/iconfont.json'

export default {
  components: { MyIcon },
  data() {
    return {
      loading: true,
      svgIcons: svgIcons.glyphs
    }
  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
</style>