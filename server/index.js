/*
 * @Descripttion:
 * @Author: a77321a
 * @Date: 2020-07-03 16:30:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-03 18:21:13
 */
const express = require('express')
const app = express()
const path = require('path')
const serverRender = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync(path.join(__dirname, './index.html'), "utf-8")
})
const createApp = require('../src/main')


app.get('*', (req, res) => {
  const vm = createApp({ url: req.url })
  serverRender.renderToString(vm).then(html => {
    res.send(html)
  }).catch(err => {
    res.send(err)
  })
})

app.listen(3333, () => {
  console.log(`server started at localhost:${3333}`);
})