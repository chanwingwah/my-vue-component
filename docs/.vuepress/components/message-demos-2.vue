<template>
  <div class="wrapper">
    <my-button @click="message1" >隐藏关闭按钮</my-button>
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
      this.$message({
        type: "error",
        showClose: false,
        message: '关闭按钮不见了'
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