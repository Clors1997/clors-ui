// state
const state = () => ({
  current: 'home'
})

// mutations
const mutations = {
  changeCurrent(state, current) {
    state.current = current
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
