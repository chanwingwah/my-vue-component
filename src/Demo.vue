<template>
  <div id="app">
    <!-- <my-icon name="loading"></my-icon> -->
    <my-button icon="loading">按钮</my-button>
    <my-button type="primary" @click="notify">notification</my-button>
    <my-button type="success" @click="notify({ autoClose: false })"
      >notification不自动关</my-button
    >
    <my-button type="primary" loading>按钮</my-button>
    <my-button @click="toggleShow">按钮2</my-button>
    <my-button icon="edit">按钮</my-button>
    <my-button disabled>按钮</my-button>
    <my-button disabled type="primary">按钮</my-button>
    <MyButtonGroup>
      <my-button>按钮1</my-button>
      <my-button icon="edit">按钮2</my-button>
      <my-button disabled>按钮3</my-button>
    </MyButtonGroup>
    <p>
      <MyNotification v-show="this.show" content="自定义内容"></MyNotification>
    </p>
  </div>
</template>
<script>
export default {
  name: "Demo",
  components: {},
  data() {
    return {
      show: true
    };
  },
  methods: {
    notify(options = {}) {
      this.$notify(options);
    },
    toggleShow() {
      this.show = !this.show;
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
