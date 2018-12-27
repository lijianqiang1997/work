<template>
  <div class="ljs-container">
    <image :src="imgList[0]" mode="aspectFull"></image>
  </div>
</template>

<script>
export default {
  data: {
    imgList: [
        "../../../static/images/extension/2.png",
        "../../../static/images/extension/223.png",
        "../../../static/images/extension/558.png"
    ]
  }
}
</script>

<style scoped>
  image {
    position:absolute;
    top: 0;
    left: 0;
  }
</style>