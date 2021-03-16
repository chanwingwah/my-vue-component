<script>
export default {
  name: "MyTab",
  props: {
    name: {
      type: [String, Number],
      require: false
    },
    label: {
      type: String,
      default: "tab"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      domIndex: undefined
    };
  },
  computed: {
    active() {
      return this.$parent.currentValue === this.tabName;
    },
    tabName() {
      return this.name || this.domIndex;
    }
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.$parent.handleChange(this);
    }
  },
  render() {
    var tab = this.$slots.label || <span>{this.label}</span>;
    const classNames = {
      tab: true,
      active: this.active,
      disabled: this.disabled
    };
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    );
  }
};
</script>

<style lang="scss" scoped>
@import "variables";

.tab {
  padding: 0 20px;
  list-style: none;
  line-height: 40px;
  position: relative;
  cursor: pointer;
  font-size: 14px;

  &:active {
    color: $activePrimary;
    background: #ecf5ff;
  }
  &.active {
    // border-bottom: 2px solid $primary;
    color: $primary;
    background: #ecf5ff;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
