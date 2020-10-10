<template>
  <div id="nav">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/Index";
export default {
  name: "Home",
  components: {
    MainTabBar
  }
};
</script>
<style lang="scss" scoped>
@import url(./assets/css/base.css);
</style>
