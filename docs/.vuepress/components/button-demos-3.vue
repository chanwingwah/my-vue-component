<template>
  <div class="wrapper">
    <my-button icon="edit"></my-button>
    <my-button icon="upload"  type="primary">上传</my-button>
    <my-button icon="delete" icon-position="right" type="primary">删除</my-button>
  </div>
</template>
<script>
import MyButton from '../../../src/button/button'
export default {
  components: { MyButton },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
</style>