<template>
  <div
    id="app"
    v-watermark="{
      text: 'chanwingwah',
      color: 'rgba(255, 0, 0, 0.1)'
    }"
  >
    <!-- <my-icon name="loading"></my-icon> -->
    <my-button icon="loading">按钮</my-button>
    <my-button type="primary" @click="notify">notification</my-button>
    <my-button type="success" @click="notify({ duration: false })"
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
      <my-image style="height:100px;width:100px"></my-image>
      <MyNotification
        v-show="this.show"
        type="success"
        message="自定义内容"
      ></MyNotification>
      <MyNotification v-wave type="info" message="自定义内容"></MyNotification>
      <MyNotification type="warning" message="自定义内容"></MyNotification>
      <MyNotification type="error" message="自定义内容"></MyNotification>
    </p>
    <p>
      <MyMessage type="info" message="错了哦，这是一条错误消息"></MyMessage>
      <MyMessage
        type="success"
        message="错了哦，这是一条错误消息,错了哦，这是一条错误消息,错了哦，这是一条错误消息"
      ></MyMessage>
      <MyMessage type="warning" message="错了哦，这是一条错误消息"></MyMessage>
      <MyMessage type="error" message="错了哦，这是一条错误消息"></MyMessage>
    </p>
    <p>
      <MySkeleton style="width:1000px;margin:0 auto"></MySkeleton>
    </p>
    <p>
      <input type="text" v-model="inputValue" />
    </p>
    <p>
      <my-tabs style="width:1000px;margin:0 auto">
        <my-tab name="first">
          <template v-slot:label>
            <span>Tsab1</span>
            <my-icon name="setting"></my-icon>
          </template>
          <p>{{ inputValue }}</p>
        </my-tab>
        <my-tab label="Tab2" name="second">
          <my-button type="primary">按钮</my-button>
        </my-tab>
        <my-tab label="Tab3" disabled name="third">
          <p>This is a tab content3</p>
        </my-tab>
      </my-tabs>
    </p>
  </div>
</template>
<script>
export default {
  name: "Demo",
  components: {},
  data() {
    return {
      show: true,
      TabValue: "first",
      inputValue: "32131"
    };
  },
  methods: {
    notify(options = {}) {
      this.$notify.success(options);
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
