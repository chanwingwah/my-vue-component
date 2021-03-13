<template>
  <button @click="$emit('click')" :class="className" :disabled="disabled">
    <div class="slot-content">
      <slot />
    </div>
    <MyIcon v-if="iconName" class="icon" :name="iconName"></MyIcon>
  </button>
</template>
<script>
import MyIcon from "../icon/icon.vue";
export default {
  name: "MyButton",
  components: {
    MyIcon: MyIcon
  },
  props: {
    type: {
      type: String,
      default: "default",
      des: "按钮类型",
      validator(value) {
        return ["default", "primary", "success", "warning", "danger"].includes(
          value
        );
      }
    },
    icon: {
      type: String,
      default: undefined,
      des: "图标"
    },
    loading: {
      type: Boolean,
      default: false,
      des: "loading状态"
    },
    disabled: {
      type: Boolean,
      default: false,
      des: "不可用状态"
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
      des: "图标位置"
    }
  },
  computed: {
    iconName() {
      return this.loading ? "loading" : this.icon;
    },
    className() {
      var className = "my-button " + this.type;
      if (this.disabled) {
        className += " disabled";
      }
      if (this.iconPosition) {
        className += ` icon-position-${this.iconPosition} `;
      }
      if (this.loading) {
        className += ` loading`;
      }
      return className;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "variables";
.my-button + .my-button {
  margin-left: 1em;
}

.my-button {
  transition: 0.1s;
  font-size: $font-size;
  height: 32px;
  padding: 0 1em;
  border-radius: $border-radius;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: 1px solid #dcdfe6;
  outline: none;
  &:not(:disabled):hover,
  &:not(:disabled).loading,
  &:not(:disabled):focus {
    opacity: 0.8;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.default {
    background: #fff;
    color: $color;
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled).loading {
      color: $primary;
      background: #ecf5ff;
      border-color: #b3d8ff;
      opacity: 1;
    }
    &:not(:disabled):active {
      color: $activePrimary;
      border-color: $activePrimary;
      background: #ecf5ff;
      opacity: 1;
    }
  }
  &.primary {
    background: $primary;
    border-color: $primary;
    &:not(:disabled):active {
      background: $activePrimary;
      border-color: $activePrimary;
      opacity: 1;
    }
  }
  &.success {
    background: $success;
    border-color: $success;
    &:not(:disabled):active {
      background: $activeSuccess;
      border-color: $activeSuccess;
      opacity: 1;
    }
  }
  &.warning {
    background: $warning;
    border-color: $warning;
    &:not(:disabled):active {
      background: $activeWarning;
      border-color: $activeWarning;
      opacity: 1;
    }
  }
  &.danger {
    background: $danger;
    border-color: $danger;
    &:not(:disabled):active {
      background: $activeDanger;
      border-color: $activeDanger;
      opacity: 1;
    }
  }

  &.loading {
    cursor: default;
    pointer-events: none;
  }

  .icon {
    margin-right: 0.1em;
    order: 1;
  }
  .slot-content {
    order: 2;
  }

  &.icon-position-right {
    .icon {
      margin-right: 0;
      margin-left: 0.1em;
      order: 2;
    }
    .slot-content {
      order: 1;
    }
  }
}
</style>
