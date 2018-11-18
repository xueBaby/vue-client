/**
 * Created by king on 2018/11/17.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
//声明使用VueRouter
Vue.use(VueRouter);
export default new VueRouter({
  //去掉地址中的#
  mode: 'history',
  //配置路由
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: Msite // 默认显示的路由组件首页 重定向
    }
  ]
  
})

