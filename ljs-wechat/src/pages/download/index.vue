<template>
  <div class="ljs-container">
    <image src="../../images/download/bg.jpg" mode="aspectFill"></image>
    <div class="btn-list" @click="play">
        <p class="btn">
          <span class="iconfont icon-pingguo"></span>
          <span>Iphone 下载</span>
        </p>
        <p class="btn">
          <span class="iconfont icon-anzhuologo"></span>
          <span>Android 下载</span>
        </p>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

/**图片**/
image {
  position: absolute;
}
/**按钮组**/
.btn-list {
    position : absolute;
    right    : 0;
    bottom   : 10.521955260978%;
    left     : 0;
    width    : 532rpx;
    margin   : 0 auto;
    font-size: 40rpx;
    color    : #000;
}
.btn .iconfont {
  margin-right: 23rpx;
  font-size   : 43rpx;
}
.btn-list .btn {
  margin    : 80rpx 0;
  background: #fff;
}


</style>
