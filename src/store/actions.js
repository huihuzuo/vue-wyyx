import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav,
  reqCateList,
} from "../api"

import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  GETCATELIST
} from "./mutation-types"

export default {
  //获取首页data信息
  async getData({commit},cb){
    const result= await reqData()
    commit(Data,{data:result.data})
    cb&&cb()
  },
  //获取首页轮播图信息
  async getBanner({commit},cb){
    const result = await reqBanner()
    //console.log(result)
    commit(Banner,{banner:result.focusList})
    cb&&cb()
  },
  //获取home数据
  async getHome({commit},cb){
    const result= await reqHome()
    //console.log(result)
    commit(Home,{result})
    cb&&cb()
  },
  //获取detail
  async getDetail({commit},cb){
    const result=await reqDetail()
    //console.log(result)
    commit(Detail,{result})
    cb&&cb()
  },
  //获取nav
  async getNav({commit},cb){
    const result=await reqNav()
    //console.log(result)
    commit(Nav,{result})
    cb&&cb()
  },

  async getCateList({commit}){
    const result=await reqCateList()
    commit(GETCATELIST,{cateList:result.data})
  }

}
