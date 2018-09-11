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
        <!--form表单-->
        <form class="form_table">
          <div class="form">
            <div class="inputPhone">
              <input type="telephone" placeholder="请输入手机号">
            </div>
            <div class="reqCode">
              <input class="input2" type="email" placeholder="请输入短信验证码" autocomplete="off">
              <div class="reqCode_text"><button>获取验证码</button></div>
            </div>
            <div class="codeLogin">
              <input type="password" placeholder="遇到问题">
              <div class="codeLogin_text"><span>使用密码验证登录</span></div>
            </div>
          </div>
        </form>
        <!--登录按钮-->
        <div class="login_text">
          <div class="phone_login">
            <span class="white_text">登录</span>
          </div>
          <div class="email_login">
            <span class="red_text">其他登录方式</span>
          </div>
          <div class="tel_register">
            <span class="black_text">注册账号</span>
          </div>
        </div>
      </div>
    </div>
    <FooterNav/>
  </div>
</template>

<script>
  export default {

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
      background-size 100px 35px
      background-position 50% 10%
      background-repeat no-repeat
      display:flex
      justify-content center
      position relative
      background-color #fff
      padding:20px
      /*form表单*/
      .form_table
        width:100%
        margin-top:150px
        .inputPhone
          margin-top:30px
          padding-bottom 3px
          border-bottom 0.5px solid #666666
          input
            outline:none
            font-size:13px
        .codeLogin
          margin-top:30px
          padding-bottom 3px
          input
            outline:none
            font-size:13px
        .reqCode
          margin-top:30px
          border-bottom 0.5px solid #666666
          padding-bottom 3px
          display:flex
          justify-content space-between
          input
            outline:none
            font-size:13px
          .reqCode_text
            font-size 14px
            width 100px
            margin-top:-10px
            button
              height 30px
              border-bottom 5px
              outline:none
        .codeLogin
          display:flex
          justify-content space-between
          .codeLogin_text
            font-size 14px
      .login_text
        width:100%
        height:200px
        position:absolute
        bottom:-65px
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
        .tel_register
          width: 100%
          height:20px
          display flex
          justify-content center
          align-items center
          margin-top:10px
          .black_text
            font-size:14px
</style>
