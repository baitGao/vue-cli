import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'

Vue.use(Router)

const routers=new Router({
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
          component: resolve => require(['@/components/main/news'], resolve),
          redirect:"/news/item_1",
          children:[
            {
              path: 'item_1',
              name: 'item_1',
              component: resolve => require(['@/components/main/item_1'], resolve)
            },
            {
              path: 'item_2',
              name: 'item_2',
              component: resolve => require(['@/components/main/item_2'], resolve)
            }
          ]
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
// console.dir(routers)
//需求:混合开发  通过参数跳转项目位置
//全局路由钩子函数,每当路由发生变化,触发
// routers.beforeEach((to,from,next)=>{
//   //from从哪来  to到哪去
//   if(to.path=="/"){
//     if(location.search.indexOf("news")!=-1){
//       next({path:"/news"})
//     }else  if(location.search.indexOf("info")!=-1){
//       next({path:"/info"})
//     }else  if(location.search.indexOf("test")!=-1){
//       next({path:"/test"})
//     }else{
//       next()
//     }
//   }else{
//     next();//前往下一个路由
//   }
// })
// // 跳转之后执行函数
// routers.afterEach((to,from)=>{
//   console.log("跳转之后执行")
// })

export default routers