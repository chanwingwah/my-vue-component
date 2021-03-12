<template>
  <div class="wrapper">
    <my-button>按钮</my-button>
    <my-button type="primary">按钮</my-button>
    <my-button type="danger">按钮</my-button>
    <my-button type="warning">按钮</my-button>
    <my-button type="success">按钮</my-button>
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