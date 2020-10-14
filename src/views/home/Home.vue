<template>
  <div class="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";

import { getHomeMultidata } from "network/home";

export default {
  // name: "Home",
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  .home-nav {
    background-color: var(--color-tint);
    color: #ff7300;
  }
}
</style>
