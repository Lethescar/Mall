<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  box-shadow: 0 0 10px #e0e0e0;
  background-color: aliceblue;
}
</style>
