<template>
  <div class="my-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MyButtonGroup',
  mounted() {
    // 检查是否传入的都是按钮
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`my-button-group 的子元素应该全是 my-button，但是你写的是 ${name}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$border-radius: 4px;
.my-button + .my-button-group {
  margin-left: 1em;
}
.my-button-group + .my-button {
  margin-left: 1em;
}

.my-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .my-button {
    border-radius: 0;
    // 边界重叠处理
    & + .my-button {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    // hover时，不被遮挡
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
