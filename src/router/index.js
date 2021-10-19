import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
    meta: { title: "Homepage" },
  },
  {
    path: "/about",
    name: "About",
    meta: { title: "About Page" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to: ", to);
  document.title = process.env.VUE_APP_TITLE + " - " + to.meta.title;
  next();
});

export default router;
