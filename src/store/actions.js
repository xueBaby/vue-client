/**
 * Created by king on 2018/11/19.
 */
//引入发送ajax暴露的方法
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

import {
  REQ_ADDRESS,
  REQ_FOODCATEGORYS,
  REQ_SHOPS
} from './mutation-types'

export default {
  // 异步获取地址信息的异步action
  async getAdress({commit,state}){
    //第一步发送ajax请求
    const {longitude,latitude} = state;
    const result = await reqAddress(latitude,longitude);
    //第二步提交到mutation
    if(result.code===0){
      const address = result.data;
      commit(REQ_ADDRESS,{address})
    }
  },
  // 异步获取食品分类列表的异步action
  async getFoodCategory({commit}){
    //发送ajax请求
    const result = await reqFoodCategorys();
    const footCategorys = result.data;
    //提交到mutations
    if(result.code===0){
      commit(REQ_FOODCATEGORYS,{categorys: footCategorys})
    }
  },
  // 异步获取商家列表的异步action
  async getShops({commit,state}){
    // 发送ajax请求
    const {latitude,longitude} = state;
    const result = await reqShops(latitude,longitude);
    //提交到mutation
    if(result.code===0){
      const shops = result.data;
      commit(REQ_SHOPS, {shops})
    }
    
  }
  
}
