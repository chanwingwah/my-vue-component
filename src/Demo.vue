<template>
  <div id="app">
    <!-- <my-icon name="loading"></my-icon> -->
    <my-button icon="loading">按钮</my-button>
    <my-button type="primary" @click="notify">notify</my-button>
    <my-button type="success">按钮</my-button>
    <my-button type="primary" loading>按钮</my-button>
    <my-button loading>按钮</my-button>
    <my-button icon="edit">按钮</my-button>
    <my-button disabled>按钮</my-button>
    <my-button disabled type="primary">按钮</my-button>
    <MyButtonGroup>
      <my-button>按钮1</my-button>
      <my-button icon="edit">按钮2</my-button>
      <my-button disabled>按钮3</my-button>
    </MyButtonGroup>
    <p>
      <MyNotification content="自定义内容"></MyNotification>
    </p>
  </div>
</template>
<script>
export default {
  name: "Demo",
  components: {},
  methods: {
    notify() {
      this.$notify();
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
