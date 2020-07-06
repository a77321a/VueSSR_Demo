/*
 * @Descripttion:
 * @Author: a77321a
 * @Date: 2020-07-03 16:30:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-06 15:41:34
 */
const express = require('express')
const app = express()
const path = require('path')
const fs = require("fs");

// const createApp = require('../src/main')
const { createBundleRenderer } = require("vue-server-renderer");
const serverBundle = require("../dist/server/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/client/vue-ssr-client-manifest.json");
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(
    path.resolve(__dirname, "./index.html"),
    "utf-8"
  ),
  clientManifest,
});
function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}
app.get('*', (req, res) => {
  const context = {
    title: "Hello SSR",
    url: req.url,
  };
  renderer.renderToString(context).then(html => {
    res.send(html)
  }).catch(err => {
    res.send(err)
  })
})

app.listen(3333, () => {
  console.log(`server started at localhost:${3333}`);
})