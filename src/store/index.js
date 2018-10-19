import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个store实例
export default new Vuex.Store({
  state: {
    order: {
      'counter': 1,
      'downmenu': 1,
      'radios': 1
    }, // 存放订单信息
    totalPrice: 0
  },
  getters: {
    getOrder (state) {
      return state.order ? state.order : {}
    },
    getTotalPrice (state) {
      return state.totalPrice > 0 ? `￥ ${state.totalPrice}` : 0
    }
  },
  mutations: {
    updateOrder (state, data) { // data = {key: value}
      // console.log(data)
      state.order[data[0]] = data[1]
    },
    updatePrice (state, price) {
      state.totalPrice = price
    }
    // increment (state) {
    //   state.count++
    // },
    // decrease (state) {
    //   state.count--
    // }
  },
  actions: {
    updateOrder (context, data) {
      context.commit('updateOrder', data)
    },
    updatePrice (context, price) {
      context.commit('updatePrice', price)
    }
  }
})
