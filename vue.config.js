/*
 * @Descripttion:
 * @Author: a77321a
 * @Date: 2020-07-04 14:58:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-06 16:07:54
 */
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals");
const env = process.env;
const merge = require('lodash.merge')
const isServer = env.BUILD_ENV === "server";

module.exports = {
  lintOnSave: false,
  // runtimeCompiler: true,
  outputDir: `dist/${env.BUILD_ENV}`,
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/assets/css/varibles.scss';`
      }
    }
  },
  configureWebpack: {
    // entry: `./src/entry-${env.BUILD_ENV}.js`,
    entry: './src/main.js',
    target: isServer ? "node" : "web",
    output: {
      libraryTarget: isServer ? "commonjs2" : undefined,
    },
    node: isServer ? undefined : false,
    externals: isServer
      ? nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        whitelist: [/\.css$/],
      })
      : undefined,
    optimization: { splitChunks: isServer ? false : undefined },
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 服务端默认文件名为 `vue-ssr-server-bundle.json`
    // 客户端默认文件名为 `vue-ssr-client-manifest.json`
    plugins: [isServer ? new VueSSRServerPlugin() : new VueSSRClientPlugin()],
  },
  productionSourceMap: false,
  publicPath: '/',
  // publicPath: isServer ? 'server' : 'client',
  // chainWebpack: config => {
  //     config.module
  //         .rule("vue")
  //         .use("vue-loader")
  //         .tap(options => {
  //             merge(options, {
  //                 optimizeSSR: false
  //             });
  //         });
  // }

  chainWebpack: config => {
    // const buildConfig = require('./src/build/' + process.env.BUILD_ENV + '.js');
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        });
      });
    // config.plugin('define').tap(args => {
    //   args[0]['process.env'].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV);
    //   args[0]['process.env'].API_BASE_URL = JSON.stringify(buildConfig.BASE_URL);
    //   return args;
    // });
  },
};