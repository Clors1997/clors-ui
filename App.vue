<script>
import getTheme from "@/common/getTheme.js"
export default {
  onLaunch: function() {
    console.log('App Launch')
    // 导入全局主题
    this.$store.commit('theme/changeTheme', getTheme())
  },
  onShow: function() {
    console.log('App Show')
  },
  onReady() {
  },
  onHide: function() {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/* free默認樣式庫 */
@import '@/common/css/free.scss';

/* 全局样式库 */
@import '@/common/css/common.scss';

/* 主题样式库 */
@import '@/common/css/theme/theme.scss';

</style>
