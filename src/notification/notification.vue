<template>
  <transition
    :name="transitionName"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div
      class="my-notification"
      v-show="visible"
      :style="style"
      @click="onClick"
    >
      <div class="notification-type" v-if="type">
        <MyIcon :name="iconName" :type="type" className="icon-style"></MyIcon>
      </div>
      <div class="notification-content">
        <h2 class="title">{{ title }}</h2>
        <div class="message">
          <p>
            {{ message }}
          </p>
        </div>
      </div>
      <MyIcon
        v-if="showClose"
        name="close"
        className="close"
        @click="handleClose"
      ></MyIcon>
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
    message: {
      type: String,
      default: "请输入提示内容"
    },
    title: {
      type: String,
      default: "提示"
    },
    type: {
      //  ['success', 'info','warning', 'error']
      type: String,
      default: undefined
    },
    showClose: {
      type: Boolean,
      default: true
    },
    position: {
      // top-right top-left bottom-right bottom-left 默认 bottom-right
      type: String,
      default: "top-right",
      validator(value) {
        return [
          "top-right",
          "top-left",
          "bottom-right",
          "bottom-left"
        ].includes(value);
      }
    },
    onClick: {
      default: () => {
        //
      },
      type: Function
    },
    onClose: {
      default: undefined,
      type: Function
    }
  },
  data() {
    return {
      visible: true,
      height: 0 // 计算偏移高度
    };
  },
  computed: {
    style() {
      return {
        position: "relative"
      };
    },
    iconName() {
      let icon = "circle-";
      if (this.type === "success") {
        icon += "check";

        return icon;
      }
      if (this.type === "error") {
        icon += "close";
        return icon;
      }
      return icon + this.type;
    },
    transitionName() {
      if (this.position.match("right")) {
        return "fade-right";
      }
      return "fade-left";
    }
  },
  methods: {
    handleClose() {
      this.$emit("close");
      if (this.onClose) {
        this.onClose();
      }
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
  display: inline-flex;
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
.notification-type {
  flex-shrink: 0;
  padding-right: 10px;
  .icon-style {
    font-size: 25px;
    &[type="success"] {
      color: $success;
    }
    &[type="info"] {
      color: $info;
    }
    &[type="warning"] {
      color: $warning;
    }
    &[type="error"] {
      color: $danger;
    }
  }
}
.notification-content {
  flex-grow: 1;
}
.title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
}
.message {
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
