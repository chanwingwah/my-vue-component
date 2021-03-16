<script>
import TabContainer from "./tab-container.vue";
export default {
  name: "MyTabs",
  component: {
    TabContainer
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number],
      default: 2,
      require: false
    }
  },
  data() {
    return {
      panes: [],
      innerValue: undefined
    };
  },
  computed: {
    markerStyle() {
      let active = this.panes.find(pane => {
        return pane.active;
      });
      if (!active) {
        return {};
      }
      return {
        width: `${active.$el.offsetWidth}px`,
        transform: `translateX(${active.$el.offsetLeft}px)`
      };
    },
    currentValue() {
      return this.innerValue || this.value;
    }
  },
  mounted() {
    let index = 1;
    this.$slots.default.forEach(vm => {
      if (!vm.componentInstance) {
        return;
      }
      vm.componentInstance.domIndex = index++;
      this.panes.push(vm.componentInstance);
    });
    if (!this.value) {
      this.innerValue = this.panes[0].tabName;
    } else {
      this.innerValue = this.value;
    }
  },
  methods: {
    handleChange(tab) {
      this.innerValue = tab.tabName;
      this.$emit("change", tab.tabName);
      this.$emit("tab-click", tab);
    }
  },
  render() {
    const panes = [...this.panes];
    return (
      <div class="my-tabs">
        <ul class="tabs-header">
          <li class="active-marker" style={this.markerStyle}></li>
          {this.$slots.default}
        </ul>
        <div class="tabs-contaner">
          <TabContainer panes={panes}></TabContainer>
        </div>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
@import "variables";
.my-tabs {
  text-align: left;
}
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  border-bottom: 2px solid #ededed;
}
.tabs-contaner {
  padding: 10px 0;
}
.active-marker {
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  background-color: $primary;
  z-index: 1;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  list-style: none;
}
</style>
