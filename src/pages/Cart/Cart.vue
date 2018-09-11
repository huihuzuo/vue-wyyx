<template>
  <div>
    <!--头部-->
    <div class="cart_header">
      <div class="header_text">
        <div class="cart_text">购物车</div>
        <div class="ticket">领券</div>
      </div>
    </div>
    <!--中间文字部分-->
    <div class="content_wrap">
      <div class="text_wrap">
        <div class="single_text">
          <span class="ring"></span>
          <span class="promise_word">30天无忧退货</span>
        </div>
        <div class="single_text">
          <span class="ring"></span>
          <span class="promise_word">48小时快速退款</span>
        </div>
        <div class="single_text">
          <span class="ring"></span>
          <span class="promise_word">满88元免邮费</span>
        </div>
      </div>
      <!--购物车logo-->
      <div class="cart_wrap">
        <div class="cartinner_wrap">
          <div class="icon">
              <i class="iconfont icon-dingdan"></i>
              <div class="addany">去添加点什么吧</div>
          </div>
          <div class="denglu">
            <span @click="startLogin('personal')">登录</span>
          </div>
        </div>
      </div>
    </div>

    <FooterNav/>
  </div>

</template>

<script>
  export default {
    name: "Cart",
    methods:{
      startLogin(personal){
        this.$router.push("/"+personal)
        this.$store.dispatch('setLoginWay',personal)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart_header
    width:100%
    height:45px
    border-bottom:1px solid #ccc
    .header_text
      width: 50%
      height:45px
      margin-left:150px
      display:flex
      justify-content space-between
      align-items center
      .ticket
        font-size:14px
        color:red

  .content_wrap
    width: 100%
    height:670px
    background-color #eee
    .text_wrap
      width:100%
      height:40px
      display:flex
      align-items center
      justify-content space-around
      .single_text
        width:150px
        font-size:14px
        display:flex
        text-align  center
        margin-left 10px
        .ring
          margin-top:3px
          margin-left:3px
          display:block
          width:3px
          height:3px
          border-radius 3px
          border:1px solid #ccc

  .cart_wrap
    width: 100%
    height:300px
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    margin:auto
    display:flex
    justify-content center
    align-items center
    .cartinner_wrap
      width:80%
      height:100%
      position:relative
      .icon
        width:300px
        height:300px
        display:flex
        flex-direction column
        justify-content center
        align-items center
        .iconfont
          font-size 80px
          color:#ccc
        .addany
          color: #999
          font-size 14px
      .denglu
        position:absolute
        bottom:0
        width:300px
        height 50px
        text-align center
        line-height:50px
        background-color rgba(223, 0, 0, 0.79)
        >span
          color:white
</style>
