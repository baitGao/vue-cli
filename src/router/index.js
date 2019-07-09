import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect:"info",//如果进入是 /重定向 info
      children: [
        {
          path: 'info',
          name: 'info',
          // 异步加载写法
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path: 'news',
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve)
        },
        {
          path: 'test',
          name: 'test',
          component: resolve => require(['@/components/main/test'], resolve)
        }
      ]
    }
  ]
})
