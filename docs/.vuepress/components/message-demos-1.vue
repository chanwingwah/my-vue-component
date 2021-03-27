<template>
  <div class="wrapper">
    <my-button @click="message1" >打开消息提示info</my-button>
    <my-button @click="message2" type="warning">打开消息提示warning</my-button>
    <my-button @click="message3" type="success">打开消息提示success</my-button>
    <my-button @click="message4" type="danger">打开消息提示error</my-button>
  </div>
</template>
<script>
import Vue from "vue";
import { message } from '../../../src/index.js'
import MyButton from '../../../src/button/button'
Vue.use(message);
export default {
  components: { MyButton },
  methods: {
    message1() {
      this.$message('这是一条默认的消息提示信息')
    },
    message2() {
      this.$message({
        type: 'warning',
        message: '这是一条警告类型的消息'
      })
    },
    message3() {
      this.$message.success('这是一条成功类型的消息')
    },
    message4() {
      this.$message.error('这是一条错误提示类型的消息')
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