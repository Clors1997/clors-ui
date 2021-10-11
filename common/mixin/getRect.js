export default {
  methods: {
    getRect(ref_dom, dom) {
      // #ifdef H5
      return ref_dom.$el.getBoundingClientRect()
      // #endif
      // #ifdef APP-NVUE
      return new Promise(function(resolve,reject) {
        dom.getComponentRect(ref_dom, e => {
          resolve(e.size)
        })
      })
      // #endif
    },
  }
}