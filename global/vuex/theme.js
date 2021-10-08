// state
const state = () => ({
  theme: ''
})

// mutations
const mutations = {
  changeTheme(state, theme) {
    getApp({allowDefault: true}).globalData.theme = theme
    state.theme = theme
  }
}

// actions
const actions = {

}

// getters
const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
