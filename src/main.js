
import Vue from 'vue';
import App from './App';
import router from './routers';
import store from './store';
//引入公共组件
import TopHeader from './components/TopHeader/TopHeader.vue';
//              名字       组件名
Vue.component('TopHeader',TopHeader)

// eslint-disable no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

