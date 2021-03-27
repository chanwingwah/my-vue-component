<template>
  <div class="wrapper">
    <my-button @click="message1" >关闭所有</my-button>
    <my-button @click="message2" type="warning">通过调用Massage使用</my-button>
  </div>
</template>
<script>
import Vue from "vue";
import { message, Message } from '../../../src/index.js'
import MyButton from '../../../src/button/button'
Vue.use(message);
export default {
  components: { MyButton },
  methods: {
    message1() {
      this.$message.closeAll()
    },
    message2() {
      Message({
        type: 'warning',
        message: '这是一条警告类型的消息'
      })
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