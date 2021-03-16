<template>
  <div class="wrapper">
    <my-tabs >
      <my-tab>
        <template v-slot:label>
          <span>自定义1</span>
          <my-icon name="setting"></my-icon>
        </template>
        <p>This is a tab content1</p>
      </my-tab>
      <my-tab >
        <template v-slot:label>
          <span>自定义2</span>
          <my-icon name="edit-outline"></my-icon>
        </template>
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
import MyIcon from '../../../src/icon/icon'

export default {
  components: { MyTabs, MyTab, MyIcon },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
</style>