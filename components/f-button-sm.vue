<template>
  <view
    @click="btnClick"
    class="flex-center rounded-circle transition-bg duration-3"
    :class="[...$store.getColor(isClick?bgHover:bgColor), boxClass]"
    :style="boxStype+boxInStyle"
  >
    <text :class="[...$store.getColor(textColor), textSize]">{{ text }}</text>
  </view>
</template>

<script>
export default {
  name: "f-button-sm",
  props: {
    boxClass: {
      type: String,
      default: 'px-4'
    },
    text: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'bg-btn-main'
    },
    bgHover: {
      type: String,
      default: 'bg-gray'
    },
    textColor: {
      type: String,
      default: 'text-white'
    },
    boxStype: {
      type: String,
      default: 'height: 43rpx;'
    },
    boxInStyle: {
      type: String,
      default: ''
    },
    textSize: {
      type: String,
      default: 'font-sss'
    },
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
      }, 300)
      this.$emit('buttonClicked')
    }
  },
}
</script>

<style></style>
