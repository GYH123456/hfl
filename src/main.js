import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'

import 'bootstrap'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import vuetify from '@/plugins/vuetify'

import 'font-awesome/css/font-awesome.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'bootstrap-table/dist/bootstrap-table.min.css'

import 'bootstrap-table/dist/bootstrap-table.min'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min'

// 注册axios
Vue.use(VueAxios, axios)

// 配置post请求头
axios.defaults.headers.post['Content-Type'] = 'text/plain';
Vue.prototype.$axios = axios;

//发起请求之前处理
// axios.interceptors.request.use(config => {
//   // 

//   if (config.method == 'post') {
//     let paramsString = '';
//     //post请求参数序列化，转成一个字符串
//     for (let key in config.data) {
//       paramsString += key + '=' + config.data[key] + '&'
//     }

//     // 

//     config.data = paramsString.slice(0, -1);

//     // 
//   }

//   return config;
// })

Vue.config.productionTip = false

// //添加appkey属性保存appkey
// Vue.prototype.appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=';

//全局过滤器
// Vue.filter('formatDate', (value, format) => {
//   //value: 2020-07-08T02:40:51.000Z
//   //format: yyyy-MM-dd hh:mm:ss
//   let current = new Date(value);

//   //获取年份
//   let year= current.getFullYear();
//   // 
//   if (/(y+)/.test(format)) {
//     //获取匹配组的内容
//     let yearContent = RegExp.$1;
//     // 

//     format = format.replace(yearContent, year);
//   }

//   //处理月日时分秒
//   let dateObject = {
//     M: current.getMonth() + 1,
//     d: current.getDate(),
//     h: current.getHours(),
//     m: current.getMinutes(),
//     s: current.getSeconds()
//   };

//   for (let key in dateObject) {
//     //创建动态正则表达式
//     let reg = new RegExp(`(${key}+)`)
//     // 
//     if (reg.test(format)) {
//       //获取匹配组的内容, RegExp.$n必须需要test验证通过可以获取
//       let content = RegExp.$1;
//       // 

//       //控制补零
//       let value = dateObject[key] >= 10 ? dateObject[key] : content.length == 2 ? '0' + dateObject[key] : dateObject[key];
//       format = format.replace(content, value);
//     }
//   }

//   return format;
// })


// 设置项目页面标题
Vue.directive('title', {
  inserted: function(el, binding){
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
