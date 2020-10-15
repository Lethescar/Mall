<template>
  <div id="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span v-text="item"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
#tab-control {
  display: flex;
  height: 45px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
    span {
      padding: 5px 5px;
    }
  }
  .active span {
    color: #ff7300;
    border-bottom: 2px solid #ff7300;
  }
}
</style>