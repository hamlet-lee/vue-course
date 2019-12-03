import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  name: ''
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios.request({
        url: '/api/userinfo'
      }).then(response => {
        const { data } = response
        const { name } = data

        commit('SET_NAME', name)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

store.dispatch('getInfo')

export default store
