import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goodsList from './modules/goodsList'
import shopCart from './modules/shopCart'

const store = new Vuex.Store ({
    state: {

    },
    modules: {
        goodsList,
        shopCart
    }

})

export default store