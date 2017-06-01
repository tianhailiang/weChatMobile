// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'
import VueLazyload from 'vue-lazyload' //基于vue的懒加载

import videoCss from 'video.js/dist/video-js.min.css'
import setWechatTitle from './utils/setWechatTitle.js' //基于微信单页面的标题
Vue.use(VueRouter);

Vue.use(videoCss);
require('video.js');


const router = new VueRouter({
  routes: routes
})

import weui from 'weui'; //引入weui css 核心库

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

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

