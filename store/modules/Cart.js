const state = {
    items: [],
    showCartModal: false,
    checkoutStatus: null,
    finalCart: [],
    lastItem: null,
}


const getters = {
    cartTotalPrice: (state) => {
        return state.items.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },
    stringifyCart: (state) => {
        let rdyForStringifyCart = [];
        state.items.forEach(item => (rdyForStringifyCart.push({
            name: item.name,
            quantity: item.quantity + '',
            description: 'Size: ' + item.selectedSize.toUpperCase()
        })))
        return JSON.stringify(rdyForStringifyCart)
    }
}


const actions = {
    addProductToCart({state, commit}, product) {
        commit('setCheckoutStatus', null)
        const cartItem = state.items.find(item => (item.id === product.id && item.selectedSize === product.selectedSize))
        if (!cartItem) {
            commit('pushProductToCart', product);
            commit('finalizeCart')
        } else {
            commit('incrementItemQuantity', cartItem)
            commit('finalizeCart')
        }
        commit('toggleCartModal')
    },

    removeProductFromCart({state, commit}, index) {
        commit('removeItem', index);
        commit('finalizeCart')
        if (state.items.length === 0) {
            commit('toggleCartModal')
        }
    },

    incrementItemQuantityAction({commit}, {id, selectedSize}) {
        commit('incrementItemQuantity', {id, selectedSize})
        commit('finalizeCart')
    },

    decrementItemQuantityAction({commit}, {id, selectedSize}) {
        commit('decrementItemQuantity', {id, selectedSize})
        commit('finalizeCart')
    },

    goToCheckout({commit}, path) {
        commit('saveLastItem', path)
        commit('finalizeCart')
    }

}


const mutations = {
    pushProductToCart(state, product) {
        state.items.push({
            id: product.id,
            img: product.img[0],
            name: product.name,
            price: product.price,
            description: product.description,
            selectedSize: product.selectedSize,
            oneSize: product.oneSize,
            quantity: 1,
        })
    },

    finalizeCart(state) {
        state.finalCart = [];
        state.items.forEach(item => (state.finalCart.push({
            name: item.name,
            unit_amount:
                {
                    currency_code: "RUB",
                    value: item.price + ''
                },
            quantity: item.quantity + '',
            description: 'Size: ' + item.selectedSize.toUpperCase()
        })))
    },

    saveLastItem(state, path) {
        state.lastItem = path
    },

    incrementItemQuantity(state, {id, selectedSize}) {
        const cartItem = state.items.find(item => (item.id === id && item.selectedSize === selectedSize))
        cartItem.quantity++
    },


    decrementItemQuantity(state, {id, selectedSize}) {
        const cartItem = state.items.find(item => (item.id === id && item.selectedSize === selectedSize))
        if (cartItem.quantity > 1) {
            cartItem.quantity--
        }
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },

    removeItem(state, index) {
        state.items.splice(index, 1);
    },

    clearCart(state) {
        state.items = [];
        state.finalCart = []
    },

    toggleCartModal: (state) => {
        state.showCartModal = !state.showCartModal
        document.body.classList.toggle("modal__active")
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}