import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Luminous from "../views/Luminous.vue";
import About from "../views/About.vue"
import  admin  from "../views/admin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/luminous",
    component: Luminous,
  },
{
  path: "/admin",
  component: admin,
},
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
