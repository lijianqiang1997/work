<template>
  <div class="ljs-container">
      <div class="portrait-circle circle  text-center bg-custom">
        <span class="iconfont icon-xiugaitouxiang font-123 text-white"></span>
      </div>

      <form class="setting-form">
        <div class="form-group">
          <div class="form-group-input">
              <input placeholder="请输入你的个人微信号" placeholder-style="placeholderStyle" >
          </div>
          <div class="form-group-right">
            <span class="plastic bg-custom" v-if="true">保存</span>
            <span class="plastic bg-custom" v-else="false">编辑</span>
          </div>
        </div>

        <div class="form-group mar-t-40">
          <div class="form-group-input">
              <input placeholder="188 8888 8888" :placeholder-style="placeholderStyle">
              <span class="text-warnning font-small">
                  *公开手机号之后，所有浏览您蓝晶111111111社助手名片的用户均可直接联系到您，请选择是否公开？
              </span>
          </div>
          <div class="form-group-right">
              <!--this.$refs.ljsSwitchState.state获取状态  默认：false-->
              <ljsSwitch ref="ljsSwitchState"></ljsSwitch>
              
          </div>
        </div>
      </form>

      <div class="setting-btn-list">
          <p class="btn bg-custom">进入蓝晶助手</p>
          <p class="btn bg-custom">分享我的蓝晶助手海报</p>
      </div>
  </div>
</template>

<script>
import ljsSwitch from '../../components/switch.vue'
export default {
  data(){
    return {
      placeholderStyle: {
        color: '#D2D6D5'
      }
    };
  },
  components: {
    ljsSwitch
  }
}
</script>

<style scoped>
.mar-t-40 {
  margin-top: 40rpx;
}

.font-123 {
  font-size: 123rpx;
}

/**容器**/
.ljs-container {
  padding-bottom: 380rpx;
}
.ljs-container:before {
  content:'';
  display: inline-block;
  height: 0;
  vertical-align: top;
}
/**头像**/
:root {
  --portrait-circle: 210rpx;
}
.portrait-circle {
  width      : var(--portrait-circle);
  height     : var(--portrait-circle);
  border     : 10rpx solid #f3f3f3;
  margin     : 52rpx auto 0;
  line-height: var(--portrait-circle);
}


/**表单**/
.setting-form {
  display   : block;
  padding   : 0 60rpx 0 38rpx;
  margin-top: 72rpx;
  font-size : 30rpx;
}
.form-group {
  display    : flex;
  align-items: flex-start;
}
.form-group-input {
  margin-right: 41rpx;
  flex        : 1;
}
.form-group-input input {
  padding      : 2rpx 0;
  border-bottom: 1rpx solid #9B9B9B;
  line-height  : 1em;
}
.form-group-right {
  min-width: 120rpx;
}
.form-group-right .plastic{
  display       : inline-block;
  width         : 118rpx;
  padding       : 1rpx;
  line-height   : 58rpx;
  color         : #fff;
  vertical-align: top;
}
.setting-btn-list {
  position  : fixed;
  right     : 0;
  left      : 0;
  bottom    : 30rpx;
  margin    : 0 25rpx 0 35rpx;
  color     : #fff;
  background: #fff;
}
.setting-btn-list .btn{
  margin: 60rpx 0;
}
</style>
