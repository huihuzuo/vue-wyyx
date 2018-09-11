
import {
  Data,
  Banner,
  Home,
  Detail,
  Nav,
  GETCATELIST
} from "./mutation-types"

export default {
  [Data](state,{data}) {
    state.hdata = data
  },
  [Banner](state,{banner}){
    state.banner=banner
  },
  [Home](state,{result}){
    const {home}=result
    //console.log(home)
    state.home=home
  },
  [Detail](state,{result}){
    const {detail}=result
    state.detail=detail
  },
  [Nav](state,{result}){
    const {nav}=result
    state.nav=nav
  },
  [GETCATELIST](state,{cateList}){
    state.cateList=cateList
  }
}
