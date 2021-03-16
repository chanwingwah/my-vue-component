<template>
  <div class="wrapper">
   <MySkeleton></MySkeleton>
  </div>
</template>
<script>
import MySkeleton from '../../../src/skeleton'
export default {
  components: { MySkeleton },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
</style>