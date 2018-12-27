<template>
    <div class="ljs-popup" v-show="show">
        <div class="ljs-popup-container">
            <span class="ljs-popup-close" :style="closeStyle" @click="hidePopup" v-if="!!close">×</span>
            <div class="ljs-popup-top">
                 <h2 class="ljs-popup-title" v-if="!!title">{{title}}</h2>
                 <div class="ljs-popup-text">
                    <span :style="textStyle">{{text}}</span>
                </div>
            </div>
            <div class="ljs-popup-btn-list">
                <div class="cancel ljs-popup-btn" v-if="!!btn1" @click="hidePopup">{{btn1}}</div>
                <div class="confirm ljs-popup-btn" v-if="!!btn2" @click="confirm">{{btn2}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },
    props:{
        show:{
            type: Boolean,
            default: true
        },
        close: {
            type: Boolean,
            default: true
        },
        closeStyle:String,
        title: String,
        text: String,
        btn1: String,
        btn2: String,
        textStyle: {
            type: String,
            default:"font-weight: normal;font-size: 28rpx"
        },
        confirm: Function
    },
    methods: {
        hidePopup: function(){
            this.show =false;
        }
    }
}
</script>

<style scoped>  

    /**遮罩层**/
    .ljs-popup {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        color: #333;
        background: rgba(0,0,0,.6);
    }

    /**容器**/
    .ljs-popup-container {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5.36rem;
        border-radius: 20rpx;
        overflow: hidden;
        background: #fff;
        transform: translate(-50%,-50%);
    }

    /**关闭按钮**/
    .ljs-popup-close {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 17rpx;
        padding-right: 25rpx;
        font-size: 43rpx;
        color: #9B9B9B;
    }

    /**标题+内容**/
    .ljs-popup-title {
        padding: 24rpx 0;
        border-bottom: 1px solid #ccc;
        font-size: 32rpx;
        font-weight: 700;
        line-height: 1;
        text-align: center;
    }
    .ljs-popup-text {
        position: relative;
    }
    .ljs-popup-text span{
        position: absolute;
        top: 50%;
        left: 50%;
        white-space: nowrap;
        transform: translate(-50%,-50%);
    }

    .ljs-popup-text:nth-child(1) {
        min-height: 250rpx;
    } 
    .ljs-popup-text:nth-child(2) {
        min-height: 168rpx;
    } 
    /**按钮组**/
    .ljs-popup-btn-list {
        display: flex;
        font-size: 36rpx;
        line-height: 80rpx;
    }
    .ljs-popup-btn-list .ljs-popup-btn{
        flex: 1;
        border-top: 1px solid #ccc;
        text-align: center;
    }
    .ljs-popup-btn-list .cancel {
        color: #000;
        background: #fff;
    }

    .ljs-popup-btn-list .confirm {
        color: #fff;
        background: linear-gradient(90deg, #4FBEFF, #8E4CFF);
    }
</style>
