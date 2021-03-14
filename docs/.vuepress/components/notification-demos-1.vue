<template>
  <div class="wrapper">
    <my-button @click="notify1">可自动关闭</my-button>
    <my-button @click="notify2">不可自动关闭</my-button>
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
      this.$notify({ message: '这是一条可自动关闭的消息' })
    },
    notify2() {
      this.$notify({
        title: '标题文案',
        duration: 0, message: '这是一条不会自动关闭的消息'
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