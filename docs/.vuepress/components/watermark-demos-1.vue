<template>
  <div class="wrapper"   v-watermark="{ text: 'chanwingwah'}">
    <p>
        <MyNotification type="success" :showClose="false" message="水印没有被遮挡"></MyNotification>
    </p>
    <p>
    </p>
  </div>
</template>
<script>
import MyButton from '../\../../src/button/button'
import { watermark, MyNotification } from '../../../src/index.js'

export default {
  components: { MyButton, MyNotification },
  directives: {
    watermark
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  height: 600px;
  margin-top: 10px;
  border: 1px solid #f0f0ff;
  border-radius: 4px;
  padding: 20px;
}
</style>