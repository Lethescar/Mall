<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff7300"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  color: #00b0fe;
  font-size: 12px;
  text-align: center;
  ::v-deep img {
    width: 23px;
    height: 23px;
    margin-top: 5px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
}
</style>
