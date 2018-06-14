import Vue from 'vue'
import Vuex from 'vuex'

import newsService from './newsService'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newsService
  }
})

