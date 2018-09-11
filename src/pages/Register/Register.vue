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
    <!--手机号注册form-->
    <div class="content_wrap">
      <div class="phone_text">
        <span>手机号注册</span>
      </div>
      <!--form表单-->
      <div class="form_wrap">
        <form>
           <div class="info">
             <input type="telphone" placeholder="请输入手机号">
           </div>
           <div class="info">
             <input type="password" placeholder="请输入短信验证码">
             <div>获取验证码</div>
           </div>
           <div class="info">
             <input type="password" placeholder="请输入密码">
           </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",

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
    width: 90%
    height:800px
    background-color #795da3
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    margin:50px auto
    .phone_text
      width 100%
      height 40px
      line-height 40px
      background-color yellow
      text-align center
    .form_wrap
      width: 100%
      background-color #55a532
      margin-top:100px
      text-align center


</style>
