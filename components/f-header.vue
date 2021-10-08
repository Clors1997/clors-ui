<template>
  <view class="w-100 flex-row align-center p-6" style="height: 62rpx;">
    <view @click="back()" class="flex-center" :style="$store.getBox('62rpx', 2)">
      <text
        v-if="left"
        class="ant-icon icon-normal"
        :class="$store.getColor('text-main')"
        >{{ $store.getIcon('left') }}</text
      >
    </view>
    <view class="flex-1 flex-row justify-center">
      <image
        src="/static/app/MainIcon@2x.png"
        style="width: 132rpx;height: 62rpx;"
      ></image>
    </view>
    <view class="" :style="$store.getBox('62rpx', 2)"></view>
  </view>
</template>

<script>
  export default {
    name:"f-header",
    props: {
      left: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      back() {
        if(this.left) {
          uni.navigateBack({
            delta: 1
          })
        }
      }
    },
  }
</script>

<style>

</style>
