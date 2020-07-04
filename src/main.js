/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-07-03 16:05:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-04 10:21:52
 */
// import Vue from 'vue'
const Vue = require('vue')
const App = require('./App.vue')
const createRouter = require('./router/index')

// import App from './App.vue'
// import createRouter from './router/index'
Vue.config.productionTip = false

module.exports = function createApp () {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router }
}

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
