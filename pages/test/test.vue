<template>
  <f-page :bg="false">
    <scroll-view
      class="flex-column align-center w-100 position-relative"
      scroll-y="true"
      :style="getBox('window')"
      
    >
      
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
