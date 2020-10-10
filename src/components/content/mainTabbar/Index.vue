<template>
  <div class="index">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/icon01.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/activeIcon01.png" alt="" />
        </template>
        <template v-slot:item-text><p>首页</p></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/icon02.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/activeIcon02.png" alt="" />
        </template>
        <template v-slot:item-text><p>分类</p></template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/icon03.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/activeIcon03.png" alt="" />
        </template>
        <template v-slot:item-text><p>购物车</p></template>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/icon04.png" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/activeIcon04.png" alt="" />
        </template>
        <template v-slot:item-text><p>我的</p></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "Home",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
