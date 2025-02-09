import { createStore } from 'vuex'
import {products} from "@/constants/product.js";
import {bagProducts} from "@/constants/bag.js";
// Create a new store instance.
const store = createStore({
    state () {
        return {
        activeClass:null,
        activeBagClass:null,
        }
    },
    getters:{
        productData:  (state) => products,

        activeClass: (state) => state.activeClass,
        activeBagClass: (state) => state.activeBagClass,
        bagData:  (state) => bagProducts,

    },
    mutations: {
        setActiveClass(state, activeClass) {
            state.activeClass = activeClass;
        },
        setActiveBagClass(state, activeBagClass) {
            state.activeBagClass = activeBagClass;
        }
    },

    actions:{
        setActiveClass({commit }, activeClass) {
            commit('setActiveClass', activeClass)
        },
        setActiveBagClass({commit }, activeBagClass) {
          commit('setActiveBagClass', activeBagClass)
        }
    }

})

export default store