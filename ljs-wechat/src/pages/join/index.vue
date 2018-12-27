<template>
  <div class="ljs-container ljs-join" style="background: url(../../../static/images/join/bg-join.jpg) no-repeat top center #01174c; background-size: 100% auto;">
      <section class="l-login-wrap">
        <div class="l-login-box text-center">
          <p class="text-30 pad-tb-20">好友邀请码</p>
          <div class="l-invite-code">
            Ylxq76
            <button plain class="l-btn small l-btn-round l-btn-blue">复制</button>
          </div>
          <div class="l-login-btn" style="background: url(../../../static/images/join/bg-btn.jpg) no-repeat center; background-size: 100% auto;">
            <button class="l-btn l-block l-btn-round l-btn-gradient">点击加入</button>
          </div>
        </div>
      </section>
      <section class="l-login-info">
        <p class="text-center">
          <image src="../../../static/images/join/title.jpg" style="width:240rpx;"  mode="widthFix"></image>
        </p>
        <p class="pad-t-30 text-26">
          蓝晶社是用区块链技术和思想打造的消费决策社区。“买卖本该透明、参与分享价值”是我们的价值观，蓝晶社致力于揭示和消灭消费过程中的暗黑力量。这些暗黑力量包括假冒伪劣、侵权、暴利、无效浪费、高成本广告……在透明消费的同时，所有为经济体作出的贡献将被记录（蓝晶），蓝晶持有者将一起分享经济体价值增长的成果。
        </p>
      </section>
  </div>
</template>

<script>

export default {
  name: 'ljsSend',
  data () {
    return {
      
    };
  }
}
</script>

<style scoped>
  .ljs-join{ min-height: 100%; height: auto;}
  .text-30{ font-size: 30rpx;}
  .text-26{ font-size: 26rpx;}
  .pad-tb-20{ padding: 29rpx 0;}
  .pad-t-30{ padding-top: 30rpx;}
  .ljs-join{ padding: 300rpx 30rpx 30rpx;}
  .l-login-wrap{ background: #fff; padding: 20rpx; border-radius: 16rpx;}
  .l-login-box{ border: 1rpx dashed #979797; border-radius: 10rpx; padding: 0 60rpx;}

  .l-invite-code{ font-size: 48rpx; color: #262A6B; position: relative;}
  .l-invite-code .l-btn{ display: inline-block; color: #3c57ae; position: absolute; right: 0; }
  .l-invite-code .l-btn[plain] {border: 1PX solid #3c57ae; }

  .l-login-btn{ padding: 60rpx 16rpx; }

  .l-login-info{ padding: 64rpx 46rpx 46rpx; margin-top: 30rpx; background: #fff; border-radius: 16rpx;}
  .l-login-info .pad-t-30{ line-height: 2;}

  .l-btn{ height: 80rpx; border: 0; padding: 0 10rpx; background: #fff; line-height: 80rpx; font-size: 31rpx;font-weight:300;}
  .l-btn-round.l-btn{ border-radius: 40rpx;}
  .l-btn-round.l-btn.small{ border-radius: 22rpx;}
  .l-btn-gradient{ background: linear-gradient(to right, #FE8F5F, #F33E53); color: #fff; }
  .l-btn.small{ height: 44rpx; line-height: 44rpx; font-size: 24rpx;}

</style>
