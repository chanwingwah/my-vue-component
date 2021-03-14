<template>
  <transition
    name="fade-right"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div class="my-notification" v-show="visible" :style="style">
      <h2 class="title">{{ title }}</h2>
      <div class="content">
        <p>
          {{ content }}
        </p>
      </div>
      <MyIcon name="close" className="close" @click="handleClose"></MyIcon>
    </div>
  </transition>
</template>
<script>
import MyIcon from "../icon/icon.vue";

export default {
  name: "MyNotification",
  components: {
    MyIcon
  },
  props: {
    content: {
      type: String,
      default: "请输入提示内容"
    },
    title: {
      type: String,
      default: "提示"
    }
  },
  data() {
    return {
      visible: true,
      zIndex: 100,
      height: 0 // 计算偏移高度
    };
  },
  computed: {
    style() {
      return {
        position: "relative"
      };
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    afterLeave() {
      // 添加closed状态， 提醒销毁dom
      this.$emit("closed");
    },
    afterEnter() {
      this.height = this.$el.offsetHeight;
    }
  }
};
</script>
<style lang="scss">
@import "transition";
</style>
<style lang="scss" scoped>
@import "variables";
.my-notification {
  text-align: left;
  width: 340px;
  border-radius: 8px;
  box-sizing: border-box;
  border: $border;
  background-color: #fff;
  padding: 14px 26px 14px 13px;
  box-shadow: $shadow;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;
}
.title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
}
.content {
  font-size: 14px;
  line-height: 21px;
  margin: 6px 0 0;
  color: $color;
  text-align: justify;
  > p {
    margin: 0;
  }
}
.close {
  position: absolute;
  top: 18px;
  right: 15px;
  cursor: pointer;
  color: $iconColor;
  font-size: 16px;
  :active {
    color: $color;
  }
}
</style>
