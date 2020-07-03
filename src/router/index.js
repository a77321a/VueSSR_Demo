/*
 * @Descripttion:
 * @Author: a77321a
 * @Date: 2020-07-03 16:34:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-03 17:45:58
 */
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 每次请求都是新的router
export default function createRouter () {
  return new VueRouter({
    mode: 'hash',
    routes: [
      {
        path: '/index',
        name: 'Index',
        component: {
          template: '<div>这是首页</div>'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: {
          template: '<div>这是关于我们</div>'
        }
      }]
  })
}


