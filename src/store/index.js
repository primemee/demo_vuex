import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
// import state from './state'
// import getters from './getter'
// import mutations from './mutations'
// import actions from './actions'
Vue.use(Vuex)

// export default new Vuex.Store({
//   // state,
//   // getters,
//   // mutations,
//   // actions,
//   modules: {
//     cart
// },
// })
//创建VueX对象
const store = new Vuex.Store({
  modules: {
    cart
},
})

export default store
