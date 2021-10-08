<template>
  <f-page ref="page">
    <view
      class="flex-column align-center justify-between"
      :style="getBox('window-!status')"
    >
      <f-header></f-header>
      <view class="flex-column align-center">
        <text class="font-lg" :class="getColor('text-dark')"
          >Verify your number with</text
        >
        <text class="font-lg" :class="getColor('text-dark')"
          >codes sent to you</text
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
            v-model="info.email"
            @input="debounceEmailChange"
            auto-blur
          />
          <view class="flex-row align-center">
            <text
              v-if="info.email != ''"
              class="ant-icon icon-normal"
              :class="getColor(emailViable?'text-main':'text-red')"
              >{{ getIcon(emailViable?'check-circle-fill':'close-circle-fill') }}</text
            >
          </view>
        </view>
      </view>

      <f-check-code></f-check-code>

      <f-button text="CONTINUE" @buttonClicked="to('login')"></f-button>

      <view class=""></view>
    </view>
  </f-page>
</template>

<script>
import readyShow from '@/common/mixin/readyShow.js'
const rule = [
  {
    name: 'email',
    nameChn: '邮箱',
    rules: ['email'],
    errorMsg: {
      email: '当前邮箱格式不正确',
    },
  },
]
export default {
  mixins: [readyShow],
  data() {
    return {
      info: {
        email: '',
      },
      emailViable: false
    }
  },
  onLoad() {
    uni.preloadPage({
      url: '../login/login',
    })
    this.debounceEmailChange = this.tools.debounce(this.emailChange, 500)
  },
  methods: {
    emailChange() {
      this.emailViable = this.$store.validate.check(this.info, rule)
    },
  },
}
</script>

<style></style>
