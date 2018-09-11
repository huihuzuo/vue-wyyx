<template>
  <div id="homeWrap">
    <!--首页头部-->
    <div class="headerWrap">
      <div class="head_top">
        <a class="head_logo">网易严选</a>
        <div class="head_search">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共13113款好物</span>
        </div>
      </div>
      <div class="head_scroll">
        <ul class="head_nav" v-if="hdata.length>0">
          <li v-for="(hd, index) in hdata" :key="index">{{hd.name}}</li>
        </ul>
      </div>
    </div>
    <!--首页轮播图-->
    <div class="swiper-container" v-if="banner.length>0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in banner" :key="index">
          <img :src="slide.picUrl" alt="">
        </div>
        <!--小圆点-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--轮播图下面的一行字-->
    <div class="promise_text">
      <div class="promise">
        <i class="iconfont icon-check-circle"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="promise">
        <i class="iconfont icon-check-circle"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="promise">
        <i class="iconfont icon-check-circle"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <!--空白-->
    <div class="blank"></div>
    <!--品牌制造商直供-->
    <div class="brand_goods_wrap">
      <div class="brand_text">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-right-circle"></i>
      </div>
      <ul class="brand_goods">
        <li class="li_good" :style="{backgroundImage: `url(${i.listPicUrl})`}" v-for="(i,index) in imgList" :key="index">
          <div class="good_description" >
            <h4 class="span1">{{i.name}}</h4>
            <span class="span1">
                <span>{{i.retailPrice}}</span>
                <span>元起</span>
             </span>
            <i class="iconfont icon-jiantou1"></i>
          </div>
        </li>
      </ul>
    </div>
    <!--新品首发-->
    <div class="newgood_text">
        <div class="newgood">新品首发</div>
        <div class="seeall">
          <span>查看全部</span>
          <i class="iconfont icon-right-circle"></i>
        </div>
    </div>
    <!--新品首发下面横向滑动商品列表-->
    <div class="newgood_list">
      <ul class="newgood_ul" v-if="home.newItemList">
        <li class="newgood_li" v-for="(i, index) in home.newItemList" :key="index">
          <img :src="i.listPicUrl" alt="">
          <div>{{i.name}}</div>
          <div>{{i.simpleDesc}}</div>
          <div class="money">￥{{i.retailPrice}}</div>
        </li>
      </ul>
    </div>
    <!--人气推荐，好物精选-->
    <div class="renqi_text">
        <div class="renqi">人气推荐，好物精选</div>
        <div class="seeAll">
          <span>查看全部</span>
          <i class="iconfont icon-jiantou1"></i>
        </div>
    </div>
    <!--行李箱那行的物品滑动列表-->
    <div class="newgood_list newgood_list1">
      <ul class="newgood_ul">
        <li class="newgood_li" v-for="(i,index) in home.popularItemNewUserList" :key="index">
          <img :src="i.listPicUrl" alt="">
          <div>{{i.name}}</div>
          <div>{{i.simpleDesc}}</div>
          <div class="money">￥{{i.retailPrice}}</div>
        </li>
      </ul>
    </div>
    <!--严选限时购-->
    <div class="timeLimit">
      <div class="timeLimit_wrap">
        <div class="timeLimit_left"></div>
        <div class="timeLimit_right">
          <div class="round"></div>
        </div>
      </div>
    </div>
    <!--福利社-->
    <div class="fulishe"></div>
    <!--专题精选-->
    <div class="spectialChoice">
      <div class="spectial_text">
        <span>专题精选</span>
        <i class="iconfont icon-jiantou1"></i>
      </div>
      <div class="spectial_goods">
        <ul class="spectial_list">
          <li class="spectial_li">
            <img src="../../../images/content/07.jpg">
            <div class="good_detail">
              <div>
                <h3>吃得到果肉的，才是真凤梨酥</h3>
                <p class="fengli">47%凤梨果肉</p>
              </div>
              <div class="price">38元起</div>
            </div>
          </li>
          <li class="spectial_li">
            <img src="../../../images/content/07.jpg">
            <div class="good_detail">
              <div>
                <h3>吃得到果肉的，才是真凤梨酥</h3>
                <p class="fengli">47%凤梨果肉</p>
              </div>
              <div class="price">38元起</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--居家好物-->
    <div class="jvjia" v-for="(cate, index) in cateList" :key="index">
      <div class="jvjia_header">
        <div class="jvjia_text">{{cate.name}}好物</div>
      </div>
      <!--居家好物下面的商品列表-->
      <div class="jvjia_list" >
        <ul class="jvjia_goods">
          <li v-for="(i,index) in cate.itemList" :key="index">
            <img :src="i.listPicUrl" alt="">
            <div class="good_description">{{i.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!--底部黑框-->
    <BottomBlank/>
    <FooterNav/>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  import Swiper from 'swiper'
  import BScroll from 'better-scroll'

  import "swiper/dist/css/swiper.min.css"
  import FooterNav from "../../components/FooterNav/FooterNav.vue"
  import BottomBlank from "../../components/BottomBlank/BottomBlank.vue"



  export default {
    mounted () {
      /*this._initScroll()*/
        new Swiper('.swiper-container', {
        autoplay:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      });
        this.$store.dispatch('getData',()=> {
        this.$nextTick(()=>{
          this._initScroll()
          new Swiper('.swiper-container', {
            autoplay:true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          });
        })
        })
        this.$store.dispatch("getBanner")
        this.$store.dispatch("getHome")
        this.$store.dispatch("getDetail")
        this.$store.dispatch("getNav")
        this.$store.dispatch("getCateList")
    },

    components:{
      FooterNav,
      BottomBlank
    },
    //计算属性里映射状态，mapState是一个函数，函数里是数组，一般获取state和getter里的数据
    computed:{
      ...mapState(["hdata","banner","home","detail","nav","cateList"]),
      ...mapGetters(['imgList'])
    },

    methods:{
      //初始化滚动
      _initScroll(){
        /*
        1  一个new BScroll只能供一个类名使用，如果是有多个类名一样的容器需要滚动，可以使用循环遍历出每一项后
        利用document.getElemmentByClassName来获取，他是个数组，直接可以使用数组的下标形式
        2  还有第二个比较笨的方法：直接再把除第一个外的类名再添加一个不同的类名，再次new一个BScroll,使用再次添加的那个类名
        */

        new BScroll(".head_scroll",{
          click:true,
          scrollX:true
        });
        new BScroll(".newgood_list",{
          click:true,
          scrollX:true
        });
        new BScroll(".newgood_list1",{
          click:true,
          scrollX:true
        });
        new BScroll(".spectial_goods",{
          click:true,
          scrollX:true
        })
      }
    },

    watch: {
      banner(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            autoplay:true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          });
          /*if(this.banner.length || this.banner.length){
            Indicator.close();
          }*/
        })
      }
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  #homeWrap
    overflow-x:hidden
    width:100%
    height:100%
    .headerWrap
      background-color #fff
      overflow: hidden
      position: fixed
      z-index: 100
      top: 0;
      width: 100%
      .head_top
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:16px
        .head_logo
          font-weight:bold
          color:black
        .head_search
          width: 70%
          height:30px
          text-align:center
          line-height:30px
          background-color #E9E9E9
          font-size:14px
          border-radius:2px
      .head_nav
        width:800px
        height:25px
        display:flex
        justify-content:space-around
        align-items: center;
        font-size:14px

    .swiper-container
      margin-top:100px
      width:100%
      height:200px
      .swiper-wrapper
        .swiper-slide
          >img
            width:100%
            height:100%
    .promise_text
      display:flex
      justify-content:space-around
      font-size:12px
      padding:10px
    .blank
      width: 100%
      height:10px
      background-color:#eee
    .brand_goods_wrap
      .brand_text
        font-size:16px
        text-align:center
        width:100%
        height:30px
        line-height:30px
      .brand_goods
        width:100%
        padding:5px
        height:238px
        .li_good
          float:left
          width:45%
          height:120px
          margin-left:10px
          margin-top:6px
          background-color:#eee
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: 33px 10px;
          padding:5px
          box-sizing:border-box
          font-size:16px
          position:relative
          overflow hidden
          img
            width:100%
            height:100%
          .good_description
            display:flex
            flex-direction:column
            .span1
              font-size 12px
              color #6E6E6E

   //新品首发下面部分
    .newgood_text
      margin-top:15px
      background-image :url("../../../images/content/bg1.png")
      background-repeat no-repeat
      width:100%
      height:130px
      display:flex
      align-items:center
      justify-content:center
      .seeall
        width:100px
        height:30px
        margin-top:60px
        margin-left:-89px
        font-size:14px
        text-align:center
        line-height:30px
        color #ccc
        background-color #F8F8F8
  //新品首发商品横向滑动列表
    .newgood_list
       width:100%
       height:140px
       .newgood_ul
         width: 700px
         height:100%
         display:flex
         .newgood_li
           width:200px
           height:200px
           margin-left:8px
           display:flex
           flex-direction:column
           >img
             width:150px
             height:150px
             background-color:#eee
           >div
             line-height:25px
             text-overflow:ellipsis
             overflow:hidden
             white-space:nowrap
             font-size:14px
           .money
             color:red
    .renqi_text
       margin-top:60px
       margin-bottom:30px
       background-image url("../../../images/content/bg2.png")
       width:100%
       height:90px
       display:flex
       align-items:center
       justify-content:center
       .seeAll
         width:100px
         height:30px
         margin-top:10px
         margin-left:40px
         font-size:14px
         text-align:center
         line-height:30px
         background-color:#ccc
//严选限时购
    .timeLimit
      margin-top:80px
      width:100%
      height:200px
      background-color:#ccc
      text-align center
      line-height 200px
      padding:10px 33px
      .timeLimit_wrap
        width:80%
        height:80%
        background-color #8BA0B6
        display:flex
        justify-content:space-between
        .timeLimit_left
          margin-top:5px
          width:130px
          height:150px
          background-color:yellow
        .timeLimit_right
          position:relative
          margin-top:5px
          width:130px
          height:150px
          background-image:url("../../../images/content/bed.png")
          background-size:100%
          .round
            position:absolute
            right:20px
            bottom:10px
            width:50px
            height:50px
            border-radius:25px
            background-color orange
            display:flex
            flex-direction:column
    .fulishe
      margin-top:10px
      width:100%
      height:200px
      background-color:pink
      background:url("../../../images/content/fulishe.jpg")
      background-repeat:no-repeat
      background-size:100%
    .spectialChoice
      width:100%
      height:200px
      .spectial_text
        margin-top:-30px
        font-size:16px
        text-align:center
        width:100%
        height:30px
        line-height:30px
      .spectial_goods
        width 100px
        height 70px
        .spectial_list
          display flex
          width 650px
          height 70px
          .spectial_li
            margin-top:20px
            margin-left 20px
            width 300px
            height:150px
            >img
              width 100%
              height:150px
            .good_detail
              display:flex
              justify-content space-between
              .fengli
                color: #999
                font-size:14px
              .price
                color:red
                font-size 14px
                width 47px
    /*居家好物*/
    .jvjia
     width:100%
     margin-top 50px
     .jvjia_header
       width: 100%
       height:50px
       text-align center
       line-height 50px
       font-size 14px
     .jvjia_list
       width:100%
       padding:15px
       overflow:hidden
       .jvjia_goods
         >li
           float:left
           width:160px
           height:180px
           margin-left:10px
           margin-top:10px
           background-color:#eee
           >img
             width:100%
             height:160
           .good_description
             background-color #F1ECE2
             width: 100%
             height:25px
             text-align center
             line-height 25px
             font-size 12px
             color:#999
    .bottom_blank
      margin-top:40px
      width: 100%
      height:170px
      background-color yellow
      opacity 0.8
      text-align center
      padding:20px
      .bottom_innerwrap
        background-color #795da3
        width:80%
        height:150px



















</style>
