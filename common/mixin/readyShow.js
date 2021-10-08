export default {
	data() {
		return {
			ready_show: false
		}
	},
  onShow() {
    if (!this.ready_show) {
      console.log('show')
      this.$nextTick(() => {
        this.ready_show = true
      })
    }
  }
}