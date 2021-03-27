import Notification from "./message.vue";
const defaultCloseTime = 3000;
export default {
  extends: Notification,
  props: {
    duration: {
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
        zIndex: this.zIndex,
        top: `${this.verticalOffset}px`
      };
    },
    autoCloseTime() {
      if (this.duration === false) {
        return 0;
      }
      if (this.duration === true) {
        return defaultCloseTime;
      }
      return this.duration;
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
