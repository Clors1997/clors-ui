export default {
  methods: {
    getBox(val, type = 1) {
      return this.$store.getBox(val, type)
    },
    getColor(...a_color_class) {
      return this.$store.getColor(...a_color_class)
    },
    getIcon(icon) {
      return this.$store.getIcon(icon)
    },
    to(page) {
      this.$store.to(page)
    }
  }
}