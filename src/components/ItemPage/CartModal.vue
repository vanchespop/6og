<template>
    <div>
        <transition name="slide">
            <aside class="cart-wrapper" v-click-outside="toggleCartModal" v-if="showCartModal">
                <header class="cart-wrapper__header">
                    <p class="cart-title">Cart</p>
                    <button type="button" class="close" @click="toggleCartModal">
                        <img src="../../../public/item/close.svg">
                    </button>
                </header>
                <section class="cart-wrapper__main">
                    <div class="cart-item" v-for="(item, index) in items" :key="index + item.name">
                        <img class="cart-item__img" :src="item.img">
                        <div class="cart-item__info">
                            <div>
                                <p class="cart-item__name">{{item.name}}</p>
                                <p class="cart-item__size">{{item.selectedSize}}</p>
                                <p class="cart-item__price">{{item.price}}₽</p>
                            </div>
                            <div class="cart-item__actions">
                                <div class="cart-item__quantity-selector">
                                    <button class="cart-item__quantity-button" @click="decrementItemQuantity(item)">-
                                    </button>
                                    <input class="cart-item__quantity-input" v-model="item.quantity" disabled>
                                    <button class="cart-item__quantity-button" @click="incrementItemQuantity(item)">+
                                    </button>
                                </div>
                                <button class="cart-item__remove-button" @click.stop="removeProductFromCart(index)">Remove</button>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="cart-wrapper__footer">
                    <p class="cart-footer__ship">Shipping & taxes calculated at checkout</p>
                    <router-link to="/checkout">
                        <button class="cart-footer__button" @click="goToCheckout">Checkout {{total}}₽</button>
                    </router-link>
                </footer>
            </aside>
        </transition>
        <transition name="fade">
            <div class="modal-mask" v-if="showCartModal"></div>
        </transition>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "CartModal",
        computed: {
            ...mapState({
                showCartModal: state => state.Cart.showCartModal,
                checkoutStatus: state => state.Cart.checkoutStatus,
                items: state => state.Cart.items
            }),
            ...mapGetters('Cart', {
                total: 'cartTotalPrice'
            }),
        },
        methods: {
            removeProductFromCart: function (index) {
                this.$store.dispatch("Cart/removeProductFromCart", index);
            },
            decrementItemQuantity(item) {
                this.$store.dispatch("Cart/decrementItemQuantityAction", item)
            },
            incrementItemQuantity(item) {
                this.$store.dispatch("Cart/incrementItemQuantityAction", item)
            },
            toggleCartModal() {
                this.$store.commit("Cart/toggleCartModal");
            },
            goToCheckout() {
                this.$store.dispatch("Cart/goToCheckout", this.$route.path)
            },

        },
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .5s ease;
    }

    .cart-wrapper {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 5;
        background: #101010;
        box-shadow: 2px 0 10px rgba(54, 54, 54, 0.2), -2px 0 10px rgba(54, 54, 54, 0.2);
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .5s;
    }

    .slide-enter, .slide-leave-to {
        transform: translateX(100%);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .cart-wrapper__header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #CECECE;
    }

    .cart-title {
        font-size: 16px;
        margin: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: white;
    }

    .close {
        margin: 10px 10px;
        opacity: 0.8;
    }

    .close:hover {
        opacity: 1 !important;
    }

    .close img {
        width: 20px;
        height: 20px;
    }

    .close:focus {
        outline: none;
    }

    .cart-wrapper__main {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .cart-item {
        display: grid;
        grid-template-columns: 40% 1fr;
        column-gap: 20px;
        margin: 20px 0;
        max-width: 100%;
    }


    .cart-item__info {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .cart-item__name {
        font-size: 14px;
        margin-bottom: 4px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
        color: white;
    }

    .cart-item__size {
        font-size: 12px;
        color: white;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    .cart-item__price {
        font-size: 12px;
        margin-bottom: 4px;
        color: white;
    }

    .cart-item__img {
        width: 100%;
    }

    .cart-item__actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        justify-self: flex-end;
    }

    .cart-item__quantity-selector {
        display: grid;
        border: 1px white solid;
        grid-template-columns: repeat(3, 30px);
        height: 40px;
    }

    .cart-item__quantity-button {
        outline: none;
        border: none;
        background: none;
        line-height: 30px;
        color: white;
    }

    .cart-item__quantity-input {
        outline: none;
        border: none;
        width: 30px;
        margin: auto;
        text-align: center;
        background: #101010 !important;
        color: white;
    }

    .cart-item__remove-button {
        letter-spacing: 2px;
        font-size: 10px;
        background: transparent;
        outline: none;
        border: none;
        text-transform: uppercase;
        text-decoration: underline white;
        color: white;
    }

    .cart-wrapper__footer {
        text-align: left;
        padding: 20px 20px;
        border-top: 1px solid #CECECE;
    }

    .cart-footer__ship {
        font-size: 12px;
        margin-bottom: 15px;
        color: white;
    }

    .cart-footer__button {
        width: 100%;
        padding: 10px 10px;
        background: white;
        color: #101010;
        border: none;
        outline: none;
    }

    input:disabled {
        background: white;
        color: white;
        -webkit-text-fill-color: white;
        opacity: 1;
    }

    p {
        margin: 0;
    }

    .cart-wrapper__main::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #101010;
    }

    .cart-wrapper__main::-webkit-scrollbar {
        width: 8px;
        background-color: #101010;
    }

    .cart-wrapper__main::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: white;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    @media all and (max-width: 767px) {
        .cart-wrapper {
            width: 100%;
        }

        .cart-wrapper__main {
            width: 100%;
            padding: 0 10px;
        }

        .cart-item {
            width: 100%;
        }

    }

    @media all and (max-width: 576px) {
        .cart-item p {
            font-size: 12px;
        }

        .cart-item__actions {
            width: 90%;
        }

        .cart-item__quantity-selector {
            grid-template-columns: repeat(3, 25px);

        }

        .cart-item__quantity-input {
            width: 25px;
        }

        @media all and (max-width: 360px) {
            .cart-item__actions {
                justify-content: flex-start;

            }

            .cart-item__quantity-selector {
                margin-right: 20px;
            }
        }
    }
</style>