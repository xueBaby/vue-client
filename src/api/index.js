/**
 * 包含n个接口请求函数的模块
 函数的返回值是promise对象
 */
import ajax from './ajax';
const prefix ='/api' ;
// [1、根据经纬度获取位置详情](#1根据经longitude纬度获取位置详情)<br/>
export const reqAddress = (latitude, longitude) => ajax(prefix+`/position/${latitude},${longitude}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(prefix+'/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/> 参数类型query
export const reqShops = ({latitude,longitude}) => ajax(prefix+'/shops',{latitude,longitude})
