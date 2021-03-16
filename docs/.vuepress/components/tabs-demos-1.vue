<template>
  <div class="wrapper">
    <my-tabs >
      <my-tab label="Tab1">
        <p>This is a tab content1</p>
      </my-tab>
      <my-tab label="Tab2">
        <p>This is a tab content2</p>
      </my-tab>
      <my-tab label="Tab3">
        <p>This is a tab content3</p>
      </my-tab>
    </my-tabs>
  </div>
</template>
<script>
import MyTabs from '../../../src/tabs/tabs'
import MyTab from '../../../src/tabs/tab'
export default {
  components: { MyTabs, MyTab },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
</style>