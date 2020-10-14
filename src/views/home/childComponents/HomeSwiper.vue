<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item">
        <img :src="item.image" alt="" />
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
img {
  width: 100%;
  height: auto;
}
</style>
