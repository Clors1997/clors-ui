<template>
  <view
    @click="btnClick"
    class="rounded-circle flex-center transition-bg duration-3"
    :class="$store.getColor(isClick?'bg-gray':'bg-btn-main')"
    style="width: 565rpx;height: 100rpx;"
  >
    <text class="font-small" :class="$store.getColor('text-white')"
      >{{text}}</text
    >
  </view>
</template>

<script>
  export default {
    name: "f-button",
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isClick: false
      };
    },
    methods: {
      btnClick() {
        this.isClick = true
        setTimeout(() => {
          this.isClick = false
        }, 400)
        this.$emit('buttonClicked')
      }
    },
  }
</script>

<style>

</style>
