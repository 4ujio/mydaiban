import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("../views/DemoView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  var tokey = localStorage.getItem("stauts");
  if (to.path == "/demo") {
    localStorage.removeItem("stauts");
    next();
  } else {
    if (tokey == "" || tokey == null) {
      next("/demo");
    } else {
      next();
    }
  }
});

export default router;
