const axios = require('axios');

const state = {
    cart: [],
    shopData:[]
}

const getters = {
    //计算总价
    cartTotal: state => {
        let cart = state.cart
        if ((cart === undefined) || (cart === null)) {
            return 0
        }
        let total = 0
        cart.forEach(value => {
            total += value.num*value.price
        });
        return total
    },
    shopData:state => state.shopData
}

const mutations = {
    //添加购物车
    ADD_CART(state, goods) {
        //console.log(state.cart);
        let hasExist = state.cart.some((item) => {
            if (item.id === goods.id) {
                item.num++
                goods.num--
                return true
            }
        })
        if (!hasExist) {
            goods.num--
            state.cart.push({
                id:goods.id,
                bookName: goods.bookName,
				price: goods.price,
				num: 1,
            })
        }
    },
    SHOP_DATA(state,data) {
        state.shopData = data.data.data
        console.log(state.shopData);
    }
}
const actions = {
    addCart({ commit }, goods) {
        commit('ADD_CART', goods)
    },
    getShopData({ commit }) {
        axios.get('https://www.easy-mock.com/mock/5fc44930d2a4be35546717b1/performanceTarget/getShopGoods')
            .then(res => {
            commit('SHOP_DATA',res)
        })
    }
}

export default {
    //namespaced: true,
    state,
    getters,
    actions,
    mutations
  }