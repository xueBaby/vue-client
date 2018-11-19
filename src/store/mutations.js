/**
 *包含n个直接更新状态数据的对象
 */
import {
  REQ_ADDRESS,
  REQ_FOODCATEGORYS,
  REQ_SHOPS
} from './mutation-types';

export default {
  [REQ_ADDRESS](state, {address}){
    state(address)
  },
  [REQ_FOODCATEGORYS](state, {categorys}){
    state(categorys)
  },
  [REQ_SHOPS](state,{shops}){
    state(shops)
  }
}
