import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import('./views/index.vue')//按需加载
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('./views/login.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;//local中取 有这个值代表登录状态
  if (to.path == '/login') {//如果路由界面是/login 继续执行
    next();
  } else {//路由守卫回登录页面
    isLogin ? next() : next('/login');
  }
});



export default router
