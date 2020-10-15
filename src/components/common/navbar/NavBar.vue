<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"> </slot></div>
    <div class="center"><slot name="center"> </slot></div>
    <div class="right"><slot name="right"> </slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style lang="scss" scoped>
.nav-bar {
  display: flex;
  width: 100vw;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 0 10px #e0e0e0;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
