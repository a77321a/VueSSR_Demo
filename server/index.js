/*
 * @Descripttion:
 * @Author: a77321a
 * @Date: 2020-07-03 16:30:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-03 16:32:58
 */
const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.send(req.url)
})

app.listen(3333, () => {
  console.log(`server started at localhost:${3333}`);
})