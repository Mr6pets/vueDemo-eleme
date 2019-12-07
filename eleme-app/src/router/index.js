import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from "../components/Index"
import Login from "../components/Login"
//实例化router
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  // base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "index", component: Index },
    // { path: "/", name: "index", component: () => import("./components/index.vue") },
    { path: "/login", name: "login", component: Login }
  ]
})
//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    //是否在登录状态下
    isLogin ? next() : next("/login");
  }
});
export default router;
