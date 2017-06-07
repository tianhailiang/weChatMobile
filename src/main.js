// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload' //基于vue的懒加载

import videoCss from 'video.js/dist/video-js.min.css' //视频插件样式
require('video.js'); //视频插件

import setWechatTitle from './utils/setWechatTitle.js' //基于微信单页面的标题

import weui from 'weui'; //引入weui css 核心库




// const VueFileUpload = require('vue-file-upload'); // 引入上传文件vue插件
// Vue.use(VueFileUpload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: 'http://localhost:7777/static/images/loading.gif',
  attempt: 1
});


//控制微信页面的标题
router.beforeEach((to, from, next) => {

   setWechatTitle(to.meta.title);

  next()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
