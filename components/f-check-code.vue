<template>
  <view class="flex-column align-center">
    <view class="flex-row justify-between px-8 w-100">
      <view
        v-for="key in 4"
        :key="key"
        @click="focusBox(key)"
        class="rounded-38 flex-center"
        :style="$store.getBox('125rpx', 2)"
        :class="[
          ...$store.getColor(
            'border-gray',
          ),
          { 'bg-main': now_code_key != key && s_code[key - 1] != '', 'bg-white': !(now_code_key != key && s_code[key - 1] != '')},
          { 'border-2': !(now_code_key != key && s_code[key - 1] != ''), 'border-0': now_code_key != key && s_code[key - 1] != '' },
          { 'shadow-dark': key == now_code_key },
        ]"
      >
        <input
          v-if="code_key == key || pre == key"
          :ref="'input' + key"
          @input="e => inputCode(key, e)"
          @blur="inputBlur"
          @focus="inputFocus"
          style="text-align: center;"
          type="number"
          :value="s_code[key - 1]"
          :style="$store.getBox('125rpx', 2)"
          :class="$store.getColor((now_code_key != key && s_code[key - 1] != '')?'text-white':'text-main')"
        />
        <text v-else :class="$store.getColor('text-white')">{{
          s_code[key - 1]
        }}</text>
      </view>
    </view>
  
    <view class="flex-row mt-6">
      <text class="font-small" :class="$store.getColor('text-light')"
        >I didn’t receive the code,</text
      >
      <text class="font-small" :class="$store.getColor('text-deep')"
        >Resend</text
      >
    </view>
  </view>
</template>

<script>
  export default {
    name:"f-check-code",
    data() {
      return {
        s_code: ['', '', '', ''],
        code_key: 1,
        now_code_key: 0,
        pre: 0,
        can_focus_flag: true
      };
    },
    methods: {
      getPre(key) {
        return key - 1 < 1 ? 1 : key - 1
      },
      getNext(key) {
        return key + 1 > 4 ? 4 : key + 1
      },
      inputBorder(key) {
        return this.now_code_key != key
      },
      inputCode(key, e) {
        console.log(key, 'inputCode')
        //设置输入替换
        let temp_value = e.detail.value[e.detail.value.length - 1] || ''
        if (
          e.detail.value.length > 0 &&
          this.$store.ftools.is0_9(temp_value)
        ) {
          this.s_code[key - 1] = temp_value
          this.code_key = this.getNext(key)
          //判断是否最后一个
          if (key == 4) {
            this.now_code_key = 0
            this.$refs['input' + this.code_key][0].blur()
            this.can_focus_flag = false
          } else {
            this.now_code_key = this.code_key
            this.pre = key
            this.$nextTick(function() {
              setTimeout(() => {
                console.log('auto focus')
                this.pre = 0
                this.$refs['input' + this.code_key][0].focus()
              }, 20)
            })
          }
        } else if (e.detail.value.length == 0) {
          this.s_code[key - 1] = ''
          this.code_key = this.getPre(key)
          this.now_code_key = this.code_key
          this.pre = key
          this.$nextTick(function() {
            setTimeout(() => {
              this.pre = 0
              this.$refs['input' + this.code_key][0].focus()
            }, 20)
          })
        }
      },
      focusBox(key) {
        this.now_code_key = this.code_key
        this.$refs['input' + this.code_key][0].focus()
      },
      inputBlur() {
        this.now_code_key = 0
      },
      inputFocus() {
        console.log('focus')
        if(this.can_focus_flag) {
          this.now_code_key = this.code_key
        }else {
          this.can_focus_flag = true
        }
      }
    }
  }
</script>

<style>

</style>
