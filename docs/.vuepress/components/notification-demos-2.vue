<template>
  <div class="wrapper">
    <my-button @click="notify1">成功</my-button>
    <my-button @click="notify2">警告</my-button>
    <my-button @click="notify3">消息</my-button>
    <my-button @click="notify4">错误</my-button>
  </div>
</template>
<script>
import Vue from "vue";
import notify from '../../../src/notification'
import MyButton from '../../../src/button/button'
Vue.use(notify);
export default {
  components: { MyButton },
  methods: {
    notify1() {
      this.$notify({ type: 'success', message: '这是一条成功类型的消息' })
    },
    notify2() {
      this.$notify({ type: 'warning', message: '这是一条警告类型的消息' })
    },
    notify3() {
      this.$notify({ type: 'info', message: '这是一条消息类型的消息' })
    },
    notify4() {
      this.$notify({ type: 'error', message: '这是一条错误类型的消息' })
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