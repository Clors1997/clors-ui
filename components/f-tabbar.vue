<template>
  <view class="position-fixed w-100 left-0 bottom-0 flex-row justify-center" style="height: 170rpx;">
    <view
      class="rounded-circle flex-row align-stretch justify-around overflow-hidden position-relative"
      :class="$store.getColor('bg-white')"
      style="width: 700rpx;height: 140rpx;"
      :style="$store.getShadow(4)">
      <view
        class="position-absolute rounded-circle top-0 transition-left duration-3"
        :class="$store.getColor('bg-gray')"
        style="width: 175rpx;height: 140rpx;" :style="'left:'+getLeft(current)+'rpx'"></view>
      <view @click.stop="$store.switch('home')"
        class="flex-1 flex-center">
        <image v-if="current == 'home'"
          src="/static/tabbar/home%20(1).png"
          :style="$store.getBox('44rpx', 2)"></image>
        <image v-else src="/static/tabbar/home.png"
          :style="$store.getBox('44rpx', 2)"></image>
      </view>
      <view @click.stop="$store.switch('home2')"
        class="flex-1 flex-center">
        <image v-if="current == 'home2'"
          src="/static/tabbar/search%20(1).png"
          :style="$store.getBox('44rpx', 2)"></image>
        <image v-else src="/static/tabbar/search.png"
          :style="$store.getBox('44rpx', 2)"></image>
      </view>
      <view @click.stop="$store.switch('home3')"
        class="flex-1 flex-center">
        <image v-if="current == 'home3'"
          src="/static/tabbar/heart%20(1).png"
          :style="$store.getBox('44rpx', 2)"></image>
        <image v-else src="/static/tabbar/heart.png"
          :style="$store.getBox('44rpx', 2)"></image>
      </view>
      <view @click.stop="$store.switch('home4')"
        class="flex-1 flex-center">
        <image v-if="current == 'home4'"
          src="/static/tabbar/mine%20(1).png"
          :style="$store.getBox('44rpx', 2)"></image>
        <image v-else src="/static/tabbar/mine.png"
          :style="$store.getBox('44rpx', 2)"></image>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: "f-tabbar",
    computed: mapState({
      current: state => state.tabbar.current,
    }),
    methods: {
      changeCurrent(current) {
        console.log(current)
        this.$store.commit('tabbar/changeCurrent', current)
      },
      getLeft(current) {
        switch (current) {
          case 'home':
            return 0
            break;
          case 'home2':
            return 175
            break;
          case 'home3':
            return 350
            break;
          case 'home4':
            return 525
            break;
          default:
            break;
        }
      }
    },
  }
</script>

<style>

</style>
