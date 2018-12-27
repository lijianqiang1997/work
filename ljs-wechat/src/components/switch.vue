<template>
        <label :class="className" @click="changeState" :data-state='state'></label>
</template>

<script>
export default {
    data() {
        return {
            className: 'ljs-switch',
            state    : false
        }
    },
    methods: {
        changeState: function() {
            let state          = this.state;
                this.className = state? "ljs-switch":"ljs-switch checked";
                this.state     = !state;
        }
    }
}
</script>

<style class="scoped">
    .ljs-switch {
        display      : inline-block;
        width        : 118rpx;
        height       : 58rpx;
        border       : 1rpx solid;
        border-radius: 751rpx;
        color        : #D2D6D5;
        background   : #D2D6D5;
    }
    .ljs-switch:before {
        content      : '';
        display      : block;
        width        : 50%;
        height       : 100%;
        border-radius: 50%;
        background   : #fff;
        transition   : margin-left .2s;
    }
    .ljs-switch.checked{
        background: linear-gradient(90deg, #4FBEFF, #8E4CFF);
    }
    .ljs-switch.checked:before {
        margin-left: 50%;
    }
</style>

