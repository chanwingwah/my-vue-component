<template>
  <svg :class="svgClass" :icon="name" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
/* 
  1、`aria-hidden="true"`作用： 把 aria-hidden="true"
      加到元素上会把该元素和它的所有子元素从可访问性树上移除。这样做可以通过隐藏下列内容来提升使用辅助技术的用户体验
  2、`v-on="$listeners"` v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素。 
*/

import "@/icon/requireSVG";
export default {
  name: "MyIcon",
  props: {
    name: { type: String, required: true },
    className: { type: String, default: "" }
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgClass() {
      if (this.className) {
        return "my-icon " + this.className;
      } else {
        return "my-icon";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
[icon="loading"] {
  animation: spin 2s infinite linear;
}
</style>
