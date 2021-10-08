<template>
  <f-page ref="page">
    <view
      class="flex-column align-center justify-between"
      :style="getBox('window-!status')"
    >
      <f-header></f-header>
      <view class="flex-column align-center">
        <text class="font-lg" :class="getColor('text-dark')">Login</text>
        <text class="mt-3 font-small" :class="getColor('text-main-2')"
          >Enter your login details to</text
        >
        <text class="font-small" :class="getColor('text-main-2')"
          >access your account</text
        >
      </view>
      <view class="flex-column align-center">
        <view
          class="shadow-main rounded-38 px-6 flex-row align-stretch"
          style="width: 565rpx;height: 154rpx;"
          :class="getColor('bg-white')"
        >
          <input
            class="flex-1 font"
            style="height: 154rpx;"
            :class="getColor('text-dark')"
            type="text"
            auto-blur
          />
          <view class="flex-row align-center">
            <text
              class="ant-icon icon-normal"
              :class="getColor('text-main')"
              >{{ getIcon('check-circle-fill') }}</text
            >
          </view>
        </view>
        <view
          class="shadow-main rounded-38 px-6 flex-row align-stretch mt-3"
          style="width: 565rpx;height: 154rpx;"
          :class="getColor('bg-white')"
        >
          <input
            class="flex-1 font"
            style="height: 154rpx;"
            :class="getColor('text-dark')"
            auto-blur
            password
          />
          <view class="flex-row align-center">
            <text
              class="ant-icon icon-normal"
              :class="getColor('text-gray')"
              >{{ getIcon('eye') }}</text
            >
          </view>
        </view>
      </view>
      
      <f-button @buttonClicked="toHome" text="LOG IN"></f-button>

      <view class=""></view>
    </view>
  </f-page>
</template>

<script>
import readyShow from '@/common/mixin/readyShow.js'
export default {
  mixins: [readyShow],
  data() {
    return {}
  },
  methods: {
    toHome() {
      uni.redirectTo({
        url: "../home/home"
      })
    }
  },
}
</script>

<style></style>
