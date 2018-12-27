<template>
  <div class="ljs-container">
      <div class="banner">
          <image src="../../../../static/images/send/send.jpg" mode="aspectFill"></image>
          <div class="banner-content middle text-white  text-center">
              <p class="font-70 nowrap">海量素材 一键调取</p>
              <p class="mar-t-25 font-40 nowrap">助你轻松成为创业达人</p>
          </div>
      </div>
      <div class="tab mar-t-25">
          <div class="tab-title flex justify-between text-black">
            <div class="tab-title-item active">
                新人指导
            </div>
            <div class="tab-title-item">
                营销素材
            </div>
            <div class="tab-title-item">
                新手必发
            </div>
            <div class="tab-title-item">
                收货反馈图
            </div>
          </div>
          
          <div class="tab-list flex">
              <div class="tab-list-img">
                <image src="../../../../static/images/article/logo-avatar.jpg" mode="aspectFill"></image>
              </div>
              <div class="tab-list-content flex-1">
                  <p class="font-28 color-60A7F7">蓝晶助手</p>
                  <p class="mar-t-19 font-24 color-2D2D2D">下载完蓝晶社，教你如何购物省钱买买买</p>
                  <p class="tab-content-img mar-t-30">
                    <image mode="aspectFill"></image>
                  </p>
                  <p class="tab-content-tips flex  justify-between align-center mar-t-30 font-24">
                    <span class="color-999">2018年11月21日 12:00</span>
                    <i></i>
                    <span class="plastic text-white">转发</span>
                    <span class="plastic text-white">一键保存</span>
                  </p>
              </div>
          </div>

          <div class="tab-list flex">
              <div class="tab-list-img">
                <image src="../../../../static/images/article/logo-avatar.jpg" mode="aspectFill"></image>
              </div>
              <div class="tab-list-content flex-1">
                  <p class="font-28 color-60A7F7">蓝晶助手</p>
                  <p class="mar-t-19 font-24 color-2D2D2D">下载完蓝晶社，教你如何购物省钱买买买</p>
                  <p class="tab-content-img mar-t-30">
                    <image mode="aspectFill"></image>
                  </p>
                  <p class="tab-content-tips flex  justify-between align-center mar-t-30 font-24">
                    <span class="color-999">2018年11月21日 12:00</span>
                    <i></i>
                    <span class="plastic text-white">转发</span>
                    <span class="plastic text-white">一键保存</span>
                  </p>
              </div>
          </div>
      </div>


      <popup
      :show = "send.show"
      :title = "send.title"
      :text = "send.text"
      :btn2 = "send.btn2"
      :confirm = "send.confirm"
    >

      </popup>
  </div>
</template>

<script>
import popup from '../../../components/popup';

export default {
  data () {
    return {
      send: {
        show: true,
        title: '温馨提示',
        text: '图片已保存，文字已复制',
        btn2: '确认',
        confirm: ()=>{
          console.log(this.send.text);
        }
      }
    }
  },
 components: {
   popup
 }
}
</script>

<style scoped>
.mar-t-19 {
  margin-top: 19rpx;
}
.mar-t-25  {
  margin-top: 25rpx;
}
.mar-t-30 {
  margin-top: 30rpx;
}
.font-24 {
  font-size: 24rpx;
}
.font-28 {
  font-size: 28rpx;
}
.font-40 {
  font-size: 40rpx;
}
.font-70 {
  font-size: 70rpx;
}
.color-60A7F7 {
  color: #60A7F7;
}
.color-999 {
  color: #999;
}
.color-2D2D2D {
  color: #2D2D2D;
}
/******banner******/
  .banner {
    position: relative;
    height: 400rpx;
  }

  /******tab******/
  .tab {
    padding: 0 20rpx;
  }
  /**tab标题**/
  .tab-title-item {
    padding: 11rpx 0;
    border-bottom: 2rpx solid transparent;
  }
  .tab-title-item.active {
    border-bottom-color: #60A7F7;
  }

  /**列表**/
  :root {
    --tab-content-tips-width: 120rpx;
  }
  .tab-list {
    padding: 30rpx 0;
  }
  /**列表左侧图片**/
  .tab-list-img {
    width: 100rpx;
    height: 100rpx;
  }
  /**右侧内容**/
 .tab-list-content {
    margin-left: 23rpx;
 } 
 .tab-content-img {
   width: 430rpx;
   height: 290rpx;
   background: #F0F0F0;
 }
  .tab-content-tips {
    line-height: 40rpx;
  }
  .tab-content-tips span:nth-of-type(2){
    width: var(--tab-content-tips-width);
    margin-right: -15rpx;
    background: linear-gradient(90deg,#407CFE,#64B8FF);
  }

  .tab-content-tips span:nth-of-type(3){
    width: var(--tab-content-tips-width);
     background: linear-gradient(90deg,#A848FF,#6F48FF);
  }
</style>
