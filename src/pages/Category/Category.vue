<template>
  <div>
    <!--头部-->
    <div class="category_head">
      <div class="header_search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共13269款好物</span>
      </div>
    </div>
    <!--列表部分-->
    <div class="category">
      <!--左侧列表-->
      <div class="categoryList_left">
        <ul class="list_left">
          <li v-for="(i,index) in nav"
              @click="getIndex(index)"
              :class="{active:activeIndex===index }"
              :key="index">
              {{i.name}}
          </li>
        </ul>
      </div>
      <!--右侧列表-->
      <div class="categoryList_right">
        <div class="categoryList_right_wrap">
          <div class="rightTop_img" >
            <img src="../../../images/content/06.jpg" alt="">
          </div>
          <div class="rightContent_all">
            <ul class="rightContent_ul">
              <li class="L-li" v-for="(item,index) in nav[activeIndex].subCateList"
                  :key="index"
              >
                <div class="circle_img" :style="{backgroundImage: `url(${item.wapBannerUrl})`}"></div>
                <div class="circle_img_detail">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FooterNav/>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'

  export default {
    data(){
      return{
       activeIndex:0
      }
    },
    mounted(){
      this.$store.dispatch("getNav",()=>{
        this.$nextTick(()=>{
          this._initScroll()
          });
      })

    },
    computed:{
      ...mapState(["nav"]),

    },
    methods:{
        //初始化滚动
        _initScroll(){
          new BScroll(".categoryList_left",{
            click:true,
            scrollY:true
          });
          new BScroll(".rightContent_all",{
            click:true,
            scrollY:true
          })
        },
      getIndex(everyindex){
        this.activeIndex = everyindex
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .category_head
    width:375px
    height:30px
    display:flex
    position:fixed
    overflow hidden
    justify-content center
    align-items center
    padding 5px
    z-index:100
    background-color #fff
    .header_search
      width:80%
      text-align center
      background-color #eee
      font-size 16px
      padding 5px
      color #999
      border-radius 5px
  .category
    height 100%
    .categoryList_left
      width:80px
      height:100%
      border-right:1px solid #ccc
      position:absolute
      top:40px
      left:0
      .list_left
        .active
          color red
        >li
          width:80px
          height:40px
          margin-top:20px
          font-size 16px
          text-align center


    .categoryList_right
      position:absolute
      right:20px
      top:40px
      width:250px
      padding:5px
      .categoryList_right_wrap
        width:250px
        height 600px
        border-top:1px solid #ccc
        .rightTop_img
          text-align center
          padding 20px 0
          background-color #fff
          position relative
          z-index 5
          >img
            width:250px
            height 100px
        .rightContent_all
          overflow hidden
          width:250px
          height:100%
          .rightContent_ul
            width:100%
            height 700px
            .L-li
              float:left
              width:80px
              margin-top:-20px
              height:150px
              .circle_img
                background-repeat no-repeat
                background-size 80px
                width:70px
                height:70px
              .circle_img_detail
                margin-left:10px
                font-size 14px
                text-align center
                margin-top 5px

</style>
