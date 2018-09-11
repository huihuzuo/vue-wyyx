<template>
  <div>
    <!--头部-->
    <div class="personal_header">
      <div class="icon">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div class="header_text">网易严选</div>
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <!--下半部分-->
    <div class="content_wrap">
      <div class="small_wrap">
        <div class="login_text">
          <div class="phone_login" @click="goLogin('phoneLogin')">
            <i class="iconfont icon-phone"></i>
            <span class="white_text">手机号码验证</span>
          </div>
          <div class="email_login">
            <i class="iconfont icon-email"></i>
            <span class="red_text" @click="goLogin('emailLogin')">邮箱账号登录</span>
          </div>
          <div class="tel_register">
            <span class="black_text" @click="goLogin('goRegister')">手机号快速注册</span>
            <i class="iconfont icon-right-circle"></i>
          </div>
        </div>
      </div>
      <!--底部分享社交软件-->
      <div class="share_app">
        <div class="wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div>|</div>
        <div class="QQ">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div>|</div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <FooterNav/>
  </div>
</template>

<script>
  export default {
    name: "Personal",
    data(){
      return{
        loginWay:null
      }
    },
    methods:{
      goLogin(loginWay){
        this.$router.push(`/${loginWay}`)
        this.$store.dispatch('setLoginWay',loginWay)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .personal_header
    width:100%
    height:45px
    display:flex
    align-items center
    justify-content space-around
    border-bottom:1px solid #ccc
    .icon
      .iconfont
        font-size 26px

  .content_wrap
    width: 100%
    background-color #eeeeee
    height:600px
    display:flex
    justify-content center
    .small_wrap
      width:90%
      height:500px
      background-image url("../../../images/content/yanxuanlogo.png")
      background-size 140px 45px
      background-position 50% 20%
      background-repeat no-repeat
      display:flex
      justify-content center
      position relative
      .login_text
        width:100%
        height:200px
        position:absolute
        bottom:60px
        .phone_login
          width: 100%
          height:40px
          background-color #b4282d
          display flex
          justify-content center
          align-items center
          margin-top:10px
          .white_text
            color:white
            font-size:14px
          .icon-phone
            font-size:20px
            color:white
        .email_login
          width: 100%
          height:40px
          border 1px solid #bd2c00
          display flex
          justify-content center
          align-items center
          margin-top:10px
          .red_text
            color:#bd2c00
            font-size:14px
          .icon-email
            font-size:20px
            color:#bd2c00
        .tel_register
          width: 100%
          height:20px
          display flex
          justify-content center
          align-items center
          margin-top:10px
          .black_text
            font-size:14px
    .share_app
      width:60%
      height:50px
      display flex
      justify-content space-around
      align-items center
      position:absolute
      bottom:60px
      .iconfont
        color: #A8A8A8
      span
        font-size 14px
        color: #A8A8A8
</style>
