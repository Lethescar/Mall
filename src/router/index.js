import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home.vue");
const Category = () => import("views/category/Category.vue");
const Shopcart = () => import("views/shopcart/Shopcart.vue");
const Mine = () => import("views/mine/Mine.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "home"
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/home",
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
];

const router = new VueRouter({
  routes
});

export default router;
