import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Shopcart = () => import("../views/shopcart/Shopcart.vue");
const Mine = () => import("../views/mine/Mine.vue");

const routes = [
  {
    path: "",
    redirect: "Home"
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
