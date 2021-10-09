<template>
  <f-page :bg="false">
    <scroll-view
      class="flex-column align-center justify-center w-100 position-relative bg-blue"
      scroll-y="true"
      :style="getBox('window')"
    >
    
    <view style="width: 200rpx;height: 100rpx;">
      <text>123</text>
    </view>
    
    </scroll-view>
  </f-page>
</template>

<script>
import global from "@/common/mixin/global.js"

export default {
  mixins: [ global ],
  data() {
    return {
    }
  },
  onLoad() {
  },
  methods: {
  },
}
</script>

<style></style>
