import Vue from "vue";
import Router from "vue-router";
const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Shopcart = () => import("views/shopcart/Shopcart.vue");
const Mine = () => import("views/mine/Mine.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "home"
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/category",
      name: "Category",
      component: Category
    },
    {
      path: "/shopcart",
      name: "Shopcart",
      component: Shopcart
    },
    {
      path: "/mine",
      name: "Mine",
      component: Mine
    }
  ]
});
