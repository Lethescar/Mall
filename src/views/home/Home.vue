<template>
  <div class="home">
    <nav-bar class="home-nav"><template #center>购物街</template></nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <tab-control
      class="tab-control"
      :title="['流行', '新款', '精选']"
    ></tab-control>
    <ul>
      <li>ceishi1</li>
      <li>ceishi2</li>
      <li>ceishi3</li>
      <li>ceishi4</li>
      <li>ceishi5</li>
      <li>ceishi6</li>
      <li>ceishi7</li>
      <li>ceishi8</li>
      <li>ceishi9</li>
      <li>ceishi10</li>
      <li>ceishi11</li>
      <li>ceishi12</li>
      <li>ceishi13</li>
      <li>ceishi14</li>
      <li>ceishi15</li>
      <li>ceishi16</li>
      <li>ceishi17</li>
      <li>ceishi18</li>
      <li>ceishi19</li>
      <li>ceishi20</li>
      <li>ceishi21</li>
      <li>ceishi22</li>
      <li>ceishi23</li>
      <li>ceishi24</li>
      <li>ceishi25</li>
      <li>ceishi26</li>
      <li>ceishi27</li>
      <li>ceishi28</li>
      <li>ceishi29</li>
      <li>ceishi30</li>
      <li>ceishi31</li>
      <li>ceishi32</li>
      <li>ceishi33</li>
      <li>ceishi34</li>
      <li>ceishi35</li>
      <li>ceishi36</li>
      <li>ceishi37</li>
      <li>ceishi38</li>
      <li>ceishi39</li>
      <li>ceishi40</li>
      <li>ceishi41</li>
      <li>ceishi42</li>
      <li>ceishi43</li>
      <li>ceishi44</li>
      <li>ceishi45</li>
      <li>ceishi46</li>
      <li>ceishi47</li>
      <li>ceishi48</li>
      <li>ceishi49</li>
      <li>ceishi50</li>
      <li>ceishi51</li>
      <li>ceishi52</li>
      <li>ceishi53</li>
      <li>ceishi54</li>
      <li>ceishi55</li>
      <li>ceishi56</li>
      <li>ceishi57</li>
      <li>ceishi58</li>
      <li>ceishi59</li>
      <li>ceishi60</li>
      <li>ceishi61</li>
      <li>ceishi62</li>
      <li>ceishi63</li>
      <li>ceishi64</li>
      <li>ceishi65</li>
      <li>ceishi66</li>
      <li>ceishi67</li>
      <li>ceishi68</li>
      <li>ceishi69</li>
      <li>ceishi70</li>
      <li>ceishi71</li>
      <li>ceishi72</li>
      <li>ceishi73</li>
      <li>ceishi74</li>
      <li>ceishi75</li>
      <li>ceishi76</li>
      <li>ceishi77</li>
      <li>ceishi78</li>
      <li>ceishi79</li>
      <li>ceishi80</li>
      <li>ceishi81</li>
      <li>ceishi82</li>
      <li>ceishi83</li>
      <li>ceishi84</li>
      <li>ceishi85</li>
      <li>ceishi86</li>
      <li>ceishi87</li>
      <li>ceishi88</li>
      <li>ceishi89</li>
      <li>ceishi90</li>
      <li>ceishi91</li>
      <li>ceishi92</li>
      <li>ceishi93</li>
      <li>ceishi94</li>
      <li>ceishi95</li>
      <li>ceishi96</li>
      <li>ceishi97</li>
      <li>ceishi98</li>
      <li>ceishi99</li>
      <li>ceishi100</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    // 商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 44px;
  .home-nav {
    position: fixed;
    top: 0;
    z-index: 9;
    background-color: var(--color-tint);
    color: #ff7300;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
}
</style>
