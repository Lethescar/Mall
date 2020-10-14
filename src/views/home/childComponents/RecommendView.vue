<template>
  <div id="home-recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p v-text="item.title"></p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#home-recommend {
  display: flex;
  padding: 10px 0;
  border-bottom: 2px solid #66d6e5;
  .recommend-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
    img {
      width: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>