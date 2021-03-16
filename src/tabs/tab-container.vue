<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render() {
    var pane = this.panes.find(pane => {
      return pane.active;
    });
    if (!pane) {
      return "";
    }
    return (
      <transition name="fade" duration={100} mode="out-in">
        <div key={pane.tabName}>{pane.$slots.default}</div>
      </transition>
    );
  }
};
</script>
<style lang="scss" scoped>
@import "transition";
</style>
