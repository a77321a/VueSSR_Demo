/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-07-03 16:05:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-06 16:36:50
 */
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index'
Vue.config.productionTip = false

export default function createApp (options) {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router }
}
