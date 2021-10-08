<template>
  <f-page ref="page">
    <view
      class="flex-column align-center justify-between"
      :style="getBox('window-!status')"
    >
      <f-header></f-header>
      <view class="flex-column align-center">
        <text
          class="font-md"
          :class="getColor('text-dark')"
          >Turn on Notification</text
        >
      </view>
      <view
        class="flex-row justify-end position-relative transition-opacity-transform duration-9"
        style="width: 565rpx;height: 132rpx;"
        :class="[
          { 'transformx--20': !ready_show, 'transformx-0': ready_show },
          { 'opacity-0': !ready_show, 'opacity-1': ready_show },
        ]"
      >
        <view
          :class="getColor('bg-white')"
          class="rounded-circle flex-column justify-center"
          style="width: 496rpx;height: 132rpx;padding-left: 105rpx;"
        >
          <text class="font-small" :class="getColor('text-main')"
            >Healthie</text
          >
          <text
            class="font-ss"
            style="margin-top: 5rpx;"
            :class="getColor('text-dark')"
            >Your weekly report is here!</text
          >
        </view>
        <view
          :class="getColor('bg-white')"
          class="flex-center position-absolute left-0"
          style="top: 16rpx;width: 132rpx;height: 100rpx;"
        >
          <image
            src="/static/app/MainIcon@2x.png"
            style="width: 61rpx;height: 29rpx;"
          ></image>
        </view>
        <view
          class="rounded-circle flex-center position-absolute right-0 top-0"
          :class="getColor('bg-white')"
          :style="getBox('33rpx', 2)"
        >
          <view
            class="rounded-circle"
            :class="getColor('bg-light', 'shadow-main')"
            :style="getBox('25rpx', 2)"
          ></view>
        </view>
      </view>
      <view
        class="flex-column align-center justify-between"
        style="width: 489rpx;height: 286rpx;"
      >
        <view
          class="flex-row align-center"
          style="width: 489rpx;height: 43rpx;"
        >
          <text
            class="ant-icon icon-small"
            :class="getColor('text-mark')"
            >{{ getIcon('check-circle-fill') }}</text
          >
          <text
            class="font-small ml-2 transition-opacity-transform duration-9"
            :class="[
              ...getColor('text-deep'),
              { 'transformx-20': !ready_show, 'transformx-0': ready_show },
              { 'opacity-0': !ready_show, 'opacity-1': ready_show },
            ]"
            >Weekly healthy suggestions</text
          >
        </view>
        <view
          class="flex-row align-center"
          style="width: 489rpx;height: 43rpx;"
        >
          <text
            class="ant-icon icon-small"
            :class="getColor('text-mark')"
            >{{ getIcon('check-circle-fill') }}</text
          >
          <text
            class="font-small ml-2 transition-opacity-transform duration-6 delay-3"
            :class="[
              ...getColor('text-deep'),
              { 'transformx-20': !ready_show, 'transformx-0': ready_show },
              { 'opacity-0': !ready_show, 'opacity-1': ready_show },
            ]"
            >Daily health reminder and reprot</text
          >
        </view>
        <view
          class="flex-row align-center"
          style="width: 489rpx;height: 43rpx;"
        >
          <text
            class="ant-icon icon-small"
            :class="getColor('text-mark')"
            >{{ getIcon('check-circle-fill') }}</text
          >
          <text
            class="font-small ml-2 transition-opacity-transform duration-3 delay-6"
            :class="[
              ...getColor('text-deep'),
              { 'transformx-20': !ready_show, 'transformx-0': ready_show },
              { 'opacity-0': !ready_show, 'opacity-1': ready_show },
            ]"
            >Tailor made services just for you</text
          >
        </view>
      </view>
      <view
        class="flex-column align-center transition-opacity-transform duration-3 delay-9"
        :class="[
          { 'transformy--50': !ready_show, 'transformy-0': ready_show },
          { 'opacity-0': !ready_show, 'opacity-1': ready_show }
        ]"
      >
        <f-button text="TURN ON" @buttonClicked="to('welcome-email')"></f-button>

        <text class="font-small mt-4" :class="getColor('text-light')"
          >Already have an account?</text
        >
      </view>

      <view class=""></view>
    </view>
  </f-page>
</template>

<script>
import readyShow from "@/common/mixin/readyShow.js"
export default {
  mixins: [ readyShow ],
  data() {
    return {
    }
  },
  onLoad() {
    uni.preloadPage({
      url: "../welcome-email/welcome-email"
    })
  },
  methods: {
  },
}
</script>

<style>
</style>
