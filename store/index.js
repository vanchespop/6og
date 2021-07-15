import Vue from 'vue'
import Vuex from 'vuex'
import Cart from "./modules/Cart";
import Items from "./modules/Items"
import Checkout from "./modules/Checkout"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
    plugins: [
        createPersistedState({
                paths: [
                    "Cart.items", "Cart.finalCart", "Cart.lastItem"
                ]
            }
        )],
    strict: debug,
    modules: {Cart, Items, Checkout},
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})


