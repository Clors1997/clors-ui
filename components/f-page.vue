<template>
  <view class="flex-column align-center w-100 position-relative"
    :class="$store.getColor('bg-page')"
    :style="$store.getBox('window')"
  >
    <!-- 设置层级背景 -->
    <view v-if="bg"
      class="w-100 position-absolute position-top"
      :class="$store.getColor('bg-page-top')"
      :style="'height:'+($store.getBox('window', 0)*2/3)+'px;'">
    </view>
    <view v-if="bg" class="w-100"
      :style="$store.getBox('status')"></view>
    <slot v-if="show_page">
    </slot>
    
    <view v-if="show_action" @click.stop="hideAction()" class="position-fixed position-full bg-gray-oc top-0 left-0 transition-opacity duration-3"
      :class="[
        { 'opacity-1': show_action_ani, 'opacity-0': !show_action_ani }
      ]"
    >
      <view ref="confirm" @click.stop="" class="position-absolute bg-white rounded-38 flex-column align-center" style="width: 550rpx;height: 400rpx;left: 100rpx;"
      :style="'top:'+($store.getBox('window',0)*0.3)+'px'">
        <view class="px-3 flex-1" style="width: 550rpx;">
          <text>develop...</text>
        </view>
        <view class="px-3 border-top border-gray" style="width: 550rpx;height: 100rpx;"></view>
      </view>
    </view>
  </view>
</template>

<script>
  import initIcon from "@/common/initIcon.js"
  // 导入nvue icon
  initIcon()
  export default {
    props: {
      bg: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        show_page: true,
        show_action: false,
        show_action_ani: false
      }
    },
    methods: {
      reload() {
        this.show_page = false
        this.$nextTick(() => {
          this.show_page = true
        })
      },
      showAction() {
        this.show_action = true
        this.$nextTick(() => {
          this.show_action_ani = true
        })
      },
      hideAction() {
        this.show_action_ani = false
        setTimeout(() => {
          this.show_action = false
        }, 300)
      }
    },
  }
</script>

<style scoped>
</style>
