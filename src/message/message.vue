<template>
  <transition
    :name="transitionName"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div
      class="my-message"
      :type="type"
      v-show="visible"
      :style="style"
      @click="onClick"
    >
      <div class="message-type" v-if="type">
        <MyIcon :name="iconName" :type="type" className="icon-style"></MyIcon>
      </div>
      <div class="message-content">
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
  name: "MyMessage",
  components: {
    MyIcon
  },
  props: {
    message: {
      type: String,
      default: "请输入提示内容"
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
      type: String,
      default: "top-center"
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
      return "fade-top";
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

.my-message {
  left: 0;
  right: 0;
  margin: 0 auto;
  display: inline-flex;
  text-align: left;
  align-items: center;
  width: 340px;
  border-radius: 4px;
  box-sizing: border-box;
  border: $border;
  background-color: #fff;
  padding: 12px 26px 12px 13px;
  // box-shadow: $shadow;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s,
    bottom 0.3s;

  &[type="success"] {
    color: $success;
    background: $successBg;
  }
  &[type="info"] {
    color: $info;
    background: $successBg;
  }
  &[type="warning"] {
    color: $warning;
    background: $warningBg;
  }
  &[type="error"] {
    color: $danger;
    background: $dangerBg;
  }
}
.message-type {
  flex-shrink: 0;
  padding-right: 10px;
  .icon-style {
    font-size: 1em;
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
.message-content {
  flex-grow: 1;
}
.message {
  font-size: 14px;
  line-height: 21px;
  margin-right: 10px;
  text-align: justify;
  > p {
    margin: 0;
  }
}
.close {
  position: absolute;
  top: 14px;
  right: 12px;
  cursor: pointer;
  color: #ccc;
  font-size: 16px;
  :active {
    color: $color;
  }
}
</style>
