/**
 * Created by king on 2018/11/17.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

//声明使用VueRouter
Vue.use(VueRouter);
export default new VueRouter({
  //去掉地址中的#
  mode: 'history',
  //配置路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: { //路由元信息 默认是
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite' // 默认显示的路由组件首页 重定向
    }
  ]
  
})

