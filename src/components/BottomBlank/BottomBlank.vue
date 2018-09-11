<template>
  <div>
    <div class="bottom_wrap">
      <div class="bottom_inner">
         <div class="tophalf">
           <div class="goApp">下载App</div>
           <div class="goPc">电脑版</div>
         </div>
         <div class="bottomhalf">
            <div>网易公司版权所有&nbsp;©&nbsp;1997-2018</div>
            <div>食品经营许可证：JY13301080111719</div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins';
  .bottom_wrap
    width 100%
    height 200px
    display: flex
    justify-content:center
    align-items:Center
    background-color #404040
    .bottom_inner
      width 80%
      height 180px

      .tophalf
        display:flex
        justify-content space-around
        >div
          margin-top 20px
          font-size 16px
          width 80px
          height 30px
          border 1px solid #ccc
          display: flex
          justify-content:center
          align-items:center
          color white
      .bottomhalf
        display: flex
        flex-direction column
        justify-content:center
        align-items:center
        width:100%
        height 100px
        >div
          font-size 14px
          color #ccc





</style>
