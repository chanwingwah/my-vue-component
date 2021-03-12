<template>
  <div class="wrapper">
    <my-button-group>
      <my-button >广州</my-button>
      <my-button >北京</my-button>
      <my-button  disabled>上海</my-button>
    </my-button-group>
    <my-button-group>
      <my-button type="primary" icon="plus"></my-button>
      <my-button type="primary" icon="edit"></my-button>
      <my-button type="primary" icon="delete"></my-button>
    </my-button-group>
  </div>
</template>
<script>
import MyButtonGroup from '../../../src/button/button-group'
import MyButton from '../../../src/button/button'
export default {
  components: { MyButton, MyButtonGroup },
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