<template>
  <f-page ref="page">
    <view
      class="flex-column align-center justify-between"
      :style="getBox('window-!status')"
    >
      <f-header :left="false"></f-header>
      <view class="flex-column align-center">
        <text class="font-lg" :class="getColor('text-dark')"
          >This is Health UX Kit,</text
        >
        <text class="font-lg" :class="getColor('text-dark')"
          >Welcome!</text
        >
        <text class="mt-3 font-small" :class="getColor('text-main-2')"
          >A health vertical UI kit made with</text
        >
        <text class="font-small" :class="getColor('text-main-2')"
          >love for Adobe XD</text
        >
      </view>
      <swiper
        :current="current"
        circular
        @change="changeCurrent"
        style="width: 355rpx;height: 534rpx;"
      >
        <swiper-item v-for="item in 5" :key="item">
          <image
            src="/static/app/Doctor@2x.png"
            style="width: 355rpx;height: 534rpx;"
          ></image>
        </swiper-item>
      </swiper>
      <view
        class="flex-row align-center justify-between"
        style="width: 167rpx;height: 14rpx;"
      >
        <view
          v-for="item in 5"
          :key="item"
          :class="getColor(current == item - 1 ? 'bg-main' : 'bg-gray')"
          class="rounded-circle"
          style="width: 14rpx;height: 14rpx;"
        ></view>
      </view>
      <view class="flex-column align-center">
        <f-button
          text="GET STARTED"
          @buttonClicked="to('welcome-notification')"
        ></f-button>

        <view class="flex-row mt-4">
          <text class="font-small" :class="getColor('text-light')"
            >Already have an account?</text
          >
          <text class="font-small" :class="getColor('text-deep')"
            >Sign in</text
          >
        </view>
      </view>

      <view></view>
    </view>
  </f-page>
</template>

<script>
import global from "@/common/mixin/global.js"

export default {
  mixins: [ global ],
  data() {
    return {
      current: 0,
    }
  },
  onLoad() {
    uni.preloadPage({
      url: '../welcome-notification/welcome-notification',
    })
  },
  onReady() {
  },
  methods: {
    changeCurrent(e) {
      this.current = e.detail.current
    }
  },
}
</script>

<style></style>
