import {get, post } from './http'
// 获取banner图
export const getBanner = p => get('getBanner', p) //p是要传递的参数

//油卡充值订单接口
export const getOilPayRank = p => get('getOilPayRank', p) //p是要传递的参数