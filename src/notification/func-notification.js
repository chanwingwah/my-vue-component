import Notification from "./notification.vue";
const defaultCloseTime = 5000;
export default {
  extends: Notification,
  props: {
    autoClose: {
      type: [Number, Boolean],
      default: defaultCloseTime,
      des:
        "自动关闭事件 假如传入 true ，则为默认时间, 传入false或者0， 则不会自动关闭"
    },
    zIndex: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      verticalOffset: 0,
      visible: false
    };
  },
  computed: {
    style() {
      return {
        position: "fixed",
        right: this.position.match("right") ? "20px" : "unset",
        left: this.position.match("left") ? "20px" : "unset",
        zIndex: this.zIndex,
        bottom: this.position.match("bottom")
          ? `${this.verticalOffset}px`
          : "unset",
        top: this.position.match("top") ? `${this.verticalOffset}px` : "unset"
      };
    },
    autoCloseTime() {
      if (this.autoClose === false) {
        return 0;
      }
      if (this.autoClose === true) {
        return defaultCloseTime;
      }
      return this.autoClose;
    }
  },
  mounted() {
    if (this.autoCloseTime > 0) {
      this.createTimer(this.autoCloseTime);
    }
  },
  methods: {
    createTimer(time) {
      this.timer = setTimeout(() => {
        this.handleClose();
      }, time);
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  },
  beforeDestory() {
    this.clearTimer();
  }
};
