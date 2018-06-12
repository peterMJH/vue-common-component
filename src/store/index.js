import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
// import permission from './modules/permission'
import table from './modules/table'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    //permission,
    table
  },
  getters
})

export default store
