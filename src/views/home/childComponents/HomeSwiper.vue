<template>
  <div id="home-swiper">
    <van-swipe :autoplay="3000" indicator-color="#66d6e5">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>
<style lang="scss" scoped>
#home-swiper {
  img {
    width: 100%;
    height: auto;
  }
}
</style>
