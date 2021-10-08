<template>
  <view class="flex-column align-center w-100"
    :class="$store.getColor('bg-page')"
    :style="$store.getBox('window')">
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
        show_page: true
      }
    },
    methods: {
      reload() {
        this.show_page = false
        this.$nextTick(() => {
          this.show_page = true
        })
      }
    },
  }
</script>

<style scoped>
</style>
