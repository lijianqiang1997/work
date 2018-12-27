<template>
  <div class="ljs-container">
      <h2 class="font-28">您的推广海报</h2>
      <div class="img-list">
        <div class="img-list-item">
          <image src="../../../static/images/extension/post1.png"></image>
          <p class="circle img-select-circle">
            <span class="iconfont icon-dui text-white"></span>
          </p>
        </div>
        <div class="img-list-item">
          <image src="../../../static/images/extension/post2.png"></image>
          <p class="circle img-select-circle">
            <span class="iconfont icon-dui text-white"></span>
          </p>
        </div>
        <div class="img-list-item">
          <image src="../../../static/images/extension/post3.png"></image>
          <p class="circle img-select-circle">
            <span class="iconfont icon-dui text-white"></span>
          </p>
        </div>
      </div>
        <div class="btn-list">
            <div class="btn bg-custom text-white">
              <p>转发给好友</p>
            </div>
            <div class="btn btn bg-custom">
              <div class="bg-white btn-second-conatiner plastic">
                <p>下载推荐名片</p>
              </div>
            </div>
        </div>

        <div class="explain">
            <h4 class="explain-title">说明</h4>
            <div class="explain-content">
                <p>你可以下载二维码推广名片邀请用户注册</p>
                <p>用户通过你的二维码进入，会成为你的团队</p>
                <p>最终解释权归本程序所有</p>
            </div>
        </div>

        <popup 
        :show = "poster.show"
        :title="poster.title"
        :text = "poster.text"
        :btn1="poster.btn1" 
        :btn2="poster.btn2"
        ></popup>
  </div>
</template>

<script>
import popup from '../../components/popup.vue';
export default {
  data(){
    return {
        poster: {
          show: true,
          title: '温馨提示',
          text: '图片已保存本地相册',
          btn2: "确认"
        }
    };
  },
  components: {
    popup
  }
}
</script>

<style scoped>
  
  .font-28 {
    font-size: 28rpx;
  }

  /**容器**/
  .ljs-container {
    padding   : 0 32rpx;
    margin-top: 39rpx;
  }

  /**海报图**/
   .img-list {
    display        : flex;
    margin-top     : 41rpx;
    justify-content: space-between;
  }
  .img-list-item {
    position: relative;
    width   : 222rpx;
    height  : 397rpx;
  }

  :root {
    --img-select-offset: 12rpx;
    --img-select-circle: 24rpx;
  }
  .img-select-circle {
    position   : absolute;
    right      : var(--img-select-offset);
    bottom     : var(--img-select-offset);
    width      : var(--img-select-circle);
    height     : var(--img-select-circle);
    border     : 1px solid #F0F0F0;
    line-height: var(--img-select-circle);
    color      : #fff;
    text-align : center;
    background : rgba(0,0,0,.6);
  }
  .icon-dui {
    display: inline-block;
    font-size: 30rpx;
    transform: translate(-3rpx,-4rpx);
  }

  /**按钮**/
  .btn-list {
    display: flex;
    margin: 98rpx auto 0;
    justify-content: space-between;
  }
  .btn-list .btn {
      width: 320rpx;
  }
  .btn-second-conatiner {
    margin: 1px;
  }
   .btn-list .btn:nth-child(2) p{
    border-radius: 751rpx;
    color: transparent;
    background: url(../../../static/images/extension/text.png) center/170rpx no-repeat;
    background: -webkit-linear-gradient(90deg, #4FBEFF, #8E4CFF);
    -webkit-background-clip: text;
   }

  /**说明**/
  .explain {
    margin-top: 95rpx;
  }
  .explain-title {
    font-size: 28rpx;
  }
  .explain-content {
    margin-top: 17rpx;
    font-size: 24rpx;
  }
  .explain-content p{
    margin: 5rpx 0;
    counter-increment: explain;
  }
  .explain-content p:before{
      content: counter(explain) '、';
  }
</style>
