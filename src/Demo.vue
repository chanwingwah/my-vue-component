<template>
  <div id="app">
    <!-- <my-icon name="loading"></my-icon> -->
    <my-button icon="loading">按钮</my-button>
    <my-button type="primary">按钮</my-button>
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
  </div>
</template>
<script>
export default {
  name: "Demo",
  components: {}
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
