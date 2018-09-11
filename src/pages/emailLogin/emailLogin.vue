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
          <div class="phone_login">
            <span class="white_text">登录</span>
          </div>
          <div class="email_login">
            <span class="red_text">其他登录方式</span>
          </div>
        </div>
      </div>
    </div>
    <FooterNav/>
  </div>
</template>

<script>
  export default {
    name: "Personal"
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

</style>
