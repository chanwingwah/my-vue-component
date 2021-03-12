<template>
  <div class="wrapper">
    <div class="icons-container">
      <div class="grid">
        <div v-for="item of svgIcons" :key="item.name">
          <div class="icon-item">
            <div class="icon-item-top">
              <my-icon :name="item.name" class-name="icon" />
            </div>
            <div class="icon-item-bottom">
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyIcon from '../../../src/icon/icon'
import svgIcons from '../../../src/icon/iconfont.json'

export default {
  components: { MyIcon },
  data() {
    return {
      loading: true,
      svgIcons: svgIcons.glyphs
    }
  }
}
</script>
<style lang="scss" scoped>
div.wrapper {
  margin-top: 10px;
}
.icons-container {
  overflow: hidden;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  .grid {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    width: 100%;
    height: 4em;
    text-align: center;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
    text-align: center;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    &:hover {
      transition: 100ms linear;
      color: #1ea6fc;
    }
    .icon-item-top {
      height: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    .icon-item-bottom {
      height: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
    cursor: text;
  }
}
</style>