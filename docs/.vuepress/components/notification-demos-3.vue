<template>
  <div class="wrapper">
    <my-button @click="notify1">右上角</my-button>
    <my-button @click="notify2">右下角</my-button>
    <my-button @click="notify3">左上角</my-button>
    <my-button @click="notify4">左下角</my-button>
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
      this.$notify({ title: '自定义位置', position: 'top-right', message: '这是一条右上的消息' })
    },
    notify2() {
      this.$notify({ title: '自定义位置', position: 'bottom-right', message: '这是一条右下的消息' })
    },
    notify3() {
      this.$notify({ title: '自定义位置', position: 'top-left', message: '这是一条左上的消息' })
    },
    notify4() {
      this.$notify({ title: '自定义位置', position: 'bottom-left', message: '这是一条左下的消息' })
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