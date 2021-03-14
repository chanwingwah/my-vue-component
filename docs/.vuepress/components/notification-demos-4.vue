<template>
  <div class="wrapper">
    <my-button @click="notify1">隐藏关闭按钮</my-button>
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
      this.$notify.success({
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    },
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