<template>
  <div class="wrapper">
    <MyNotification v-wave type="success" :showClose="false" message="请点击查看波纹效果"></MyNotification>
   
    <p>
    <my-button v-wave="{backgroundColor:'rgba(255, 255, 255, 0.5)'}" type="primary">自定义波纹颜色</my-button>
    <my-button v-wave="{backgroundColor:'rgba(255, 0, 0, 0.5)'}" type="warning">自定义波纹颜色</my-button>
    </p> 
  </div>
</template>
<script>
import MyButton from '../../../src/button/button'
import { wave, MyNotification } from '../../../src/index.js'

export default {
  components: { MyButton, MyNotification },
  directives: {
    wave
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
  .my-button {
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 1em;
  }
}
</style>