<template>
  <div class="ljs-container">
    
    <div class="assistant-header">
    <image src="../../../../static/images/assistant/bg-user.jpg" mode="aspectFill" class="bg-image"></image>
      <div class="connect">
          <div class="img-container circle bg-white">
              <span class="iconfont icon-kefu"></span>
          </div>
          <p class="mar-t-9 font-24 text-white text-center">联系客服</p>
      </div>

      <div class="header-main">
          <div class="header-main-portrait circle">
            <image src="../../../../static/images/article/logo-avatar.jpg" mode="aspectFull"></image>
            <span class="plastic portrait-plastic director-plastic font-24 text-white tour-linear">游客</span>
          </div>
          <div class="flex mar-t-52 justify-center align-start text-white">
            <span class="font-36  nowrap">消费本该透明&nbsp;&nbsp;参与分享价值</span>
            
          </div>
          
      </div>
      
    </div>

    <div class="content">
      <div class="flex justify-around menu text-center bg-white">
          <div>
            <p class="mar-b-29 t1 text-dazzle font-50">
              <span class="iconfont icon-wenzhanghuoke"></span>
            </p>
            <p class="text">文章资讯</p>
          </div>
          <div>
            <p class="mar-b-29  text-dazzle t2 font-50">
              <span class="iconfont icon-pengyouquan"></span>
            </p>
            <p class="text">一键发圈</p>
          </div>
          <div>
            <p class="mar-b-29 t2 text-dazzle font-50">
              <span class="iconfont icon-education"></span>
            </p>
            <p class="text">蓝晶大学</p>
          </div>
          <div>
            <p class="mar-b-29 t4 text-dazzle font-50">
              <span class="iconfont icon-wentijilu"></span>
            </p>
            <p class="text">常见问题</p>
          </div>
  </div>

  <div class="menu-list">
      <div class="menu-list-item  flex align-center">
        <div class="menu-list-item-img">
          <image></image>
        </div>
        <div class="menu-list-item-text">
          <p class="mar-b-30">蓝晶社是个什么样的平台?</p>
          <p class="color-9c9c9c">
            <span>今日更新</span>
            <span class="mar-l-36">阅读:<span class="pad-l-20">148700</span></span>
          </p>
        </div>
      </div>

      <div class="menu-list-item  flex align-center">
        <div class="menu-list-item-img">
          <image></image>
        </div>
        <div class="menu-list-item-text">
          <p class="mar-b-30">蓝晶社是个什么样的平台?</p>
          <p class="color-9c9c9c">
            <span>今日更新</span>
            <span class="mar-l-36">阅读:<span class="pad-l-20">148700</span></span>
          </p>
        </div>
      </div>

      <div class="menu-list-item  flex align-center">
        <div class="menu-list-item-img">
          <image></image>
        </div>
        <div class="menu-list-item-text">
          <p class="mar-b-30">电商那么多，为什么要选蓝晶社?</p>
          <p class="color-9c9c9c">
            <span>今日更新</span>
            <span class="mar-l-36">阅读:<span class="pad-l-20">148700</span></span>
          </p>
        </div>
      </div>

      
  </div>
    </div>
      <div class="btn assistant-btn">
          <p>下载APP</p>
    </div>
    
      <popup
      :show= "assistant.show"
      :close = "assistant.close"
      :text="assistant.text"
      :btn1="assistant.btn1"
      :btn2="assistant.btn2"
      :confirm = "assistant.confirm"
      >
      
      </popup>
  </div>
</template>

<script>
import popup from '../../../components/popup'
export default {
  data () {
    return {
      assistant: {
        show: false,
        close: false,
        text: '155 8888 8888',
        btn1: '取消',
        btn2: '确定',
        confirm: function(){
          console.log(1);
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
  .pad-l-20 {
    padding-left: 20rpx;
  }
  .mar-t-9 {
    margin-top: 9rpx;
  }
  .mar-t-12 {
    margin-top: 12rpx;
  }
  .mar-t-26 {
   margin-top: 26rpx;
 }
 .mar-t-34 {
   margin-top: 34rpx;
 }
 .mar-t-52 {
   margin-top: 52rpx;
 }
 .mar-r-10 {
   margin-right: 10rpx;
 }
  .mar-r-20 {
    margin-right: 20rpx;
  }
  .mar-r-26 {
    margin-right: 26rpx;
  }
  .mar-b-27 {
    margin-bottom: 27rpx;
  }
  .mar-b-29 {
    margin-bottom: 29rpx;
  }
  .mar-b-30 {
    margin-bottom: 30rpx;
  }
  .mar-l-36 {
    margin-left: 36rpx;
  }
  .font-24 {
    font-size: 24rpx;
  }
  .font-36 {
    font-size: 36rpx;
  }
  .font-40 {
    font-size: 40rpx;
  }
  .font-50 {
    font-size: 50rpx;
  }
  .letter-5 {
    letter-spacing: 5rpx;
  }
  .letter-7 {
    letter-spacing: 7rpx;
  }
 .color-9c9c9c {
   color: #9c9c9c;
 }
  .director-linear {
   background:linear-gradient(90deg,#43B5FE,#F954FF);
 }
    /******头部******/
    :root {
      --header-top: 50rpx;
    }
    .assistant-header {
      position: relative;
      min-height: 520rpx;
    }
    .assistant-header .bg-image {
      position: absolute;
    }
    /**联系客服  左上角**/
    .connect {
      position: absolute;
      top: var(--header-top);
      left: 43rpx;
    }
    :root {
      --img-container: 70rpx;
    }
    .img-container {
      width: var(--img-container);
      height: var(--img-container);
      margin: 0 auto;
    }
    .img-container .icon-kefu {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 40rpx;
      line-height: var(--img-container);
      color: transparent;
      text-align: center;
      background: url(../../../../static/images/assistant/connect@2x.png) center/39rpx no-repeat;
      background: -webkit-linear-gradient(90deg, #4FBEFF, #8E4CFF);
      -webkit-background-clip: text;
    }

    /**头像主体  中间**/
    .header-main{
      position: absolute;
      top: 61rpx;
      left: 50%;
      transform: translateX(-50%);
    }
    :root{
      --header-main-portrait: 162rpx;
    }
    .header-main-portrait {
      position: relative;
      width: var(--header-main-portrait);
      height: var(--header-main-portrait);
      padding: 10rpx;
      margin: 0 auto;
      background: rgb(183,113,254,.3);
    }
    .portrait-plastic {
      padding: 7rpx 16rpx 6rpx;
      white-space: nowrap;
    }
    .director-plastic {
      position: absolute;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg,#43B5FE,#F954FF);
      transform: translateX(30%);
    }
    .copy-plastic {
      color: transparent;
      background-color: #fff;
    }
    .copy-plastic>span {
      display: block;
      color: transparent;
      background: -webkit-linear-gradient(52deg,#4380FE,#CE39FF);
      -webkit-background-clip: text;
    }

    /**右上角区域**/
    :root {
     --header-smallPortrait-img: 70rpx;
    }
    .header-main-smallPortrait {
      position: absolute;
      top: var(--header-top);
      right: 0;
      padding: 10rpx;
      border-top-left-radius: 751rpx;
      border-bottom-left-radius: 751rpx;
      background: rgba(0,0,0,.05);
    }
    .header-smallPortrait-img  {
      width: var(--header-smallPortrait-img);
      height: var(--header-smallPortrait-img);
    }

    /******内容区******/
    .content {
      background: #f3f3f3;
    }
    /**菜单栏**/
    :root {
      --text-dazzle: 51rpx;
    }
    .menu {
      position: relative;
      padding: 37rpx 0;
      margin: -129rpx 30rpx 0;
      border-radius: 10rpx;
    }
    .text-dazzle {
      height: var(--text-dazzle);
      font-size: var(--text-dazzle);
      line-height: var(--text-dazzle);
      color: transparnt;
      background: -webkit-linear-gradient(52deg,#4380FE,#CE39FF);
      -webkit-background-clip: text;
    }
    .t1 {
      font-size: var(--text-dazzle);
      line-height: var(--text-dazzle);
      background: url(../../../../static/images/assistant/zixun@2x.png) center/50rpx no-repeat; 
    }
    .t2 {
      font-size: 62rpx;
      background: url(../../../../static/images/assistant/faquan@2x.png) center/50rpx no-repeat; 
    }
    .t3 {
      font-size: 62rpx;
      background: url(../../../../static/images/assistant/daxue@2x.png) center/50rpx no-repeat; 
    }
    .t4 {
      background: url(../../../../static/images/assistant/wenti@2x.png) center/50rpx no-repeat; 
    }

    .text-dazzle .iconfont {
      color: transparent;
    }
    .menu .text {
      font-size: 24rpx;
      color: #303030;
    }

    /**列表区**/
    .menu-list-item {
      padding: 30rpx;
      margin-top: 20rpx;
      background: #fff;
    }
    .menu-list-item-img{
        width: 183rpx;
        height: 133rpx;
        margin-right: 20rpx;
        background: #edf8fd;
    }
    .menu-list-item-text {
      flex: 1;
    }

    /**按钮区**/
    .assistant-btn {
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 99;
      margin: 0 40rpx;
      background: #fff;  
      box-shadow: 0px 0px 5rpx 3rpx #f1f1f1;
    }
    .assistant-btn p {
      height: inherit;
      font-size: 35rpx;
      color: transparent;
      background: url(../../../../static/images/assistant/download.png) center/160rpx no-repeat;
      background: -webkit-linear-gradient(90deg, #4FBEFF, #8E4CFF);
      -webkit-background-clip: text;
    }
</style>
