<template>
  <div class="wrapper">
    <my-button @click="notify1">关闭所有</my-button>
    <my-button @click="notify2">通过Notification使用</my-button>
  </div>
</template>
<script>
import Vue from "vue";
import notify from '../../../src/notification'
import { Notification } from '../../../src/index.js'
import MyButton from '../../../src/button/button'
Vue.use(notify);
export default {
  components: { MyButton },
  methods: {
    notify1() {
      Notification.closeAll()
    },
    notify2() {
      Notification.success({
        message: '通过Notification使用',
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