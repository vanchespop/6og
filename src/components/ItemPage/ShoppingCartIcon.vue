<template>
    <div class="cart-icon">
        <img class="shopping-cart" src="../../../public/item/shopping-bag.svg" @click="toggleCartModal">
        <transition name="scale">
            <span class="shopping-cart__dot" v-if="items.length > 0"></span>
        </transition>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "ShoppingCartIcon",
        methods: {
            toggleCartModal() {
                this.$store.commit("Cart/toggleCartModal");
            },
        },
        computed: {
            ...mapState({
                items: state => state.Cart.items
            }),
        }
    }
</script>

<style scoped>
    .shopping-cart {
        margin-top: -1px;
        width: 30px;
        cursor: pointer;
        transition: all .2s;
    }

    .cart-icon{
        position: relative;
    }

    .cart-icon:hover{
        opacity: 0.6;
    }


    .shopping-cart__dot {
        position: absolute;
        top: 3px;
        right: 0;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #eeeded;
        box-shadow: 0 0 0 2px #1c1b1b;
    }


    .scale-enter-active, .scale-leave-active {
        transition: all 0.3s ease-in-out;
    }

    .scale-enter, .scale-leave-to {
        transform: scale(0);
    }

    @media all and (max-width: 850px) {
        .shopping-cart {
            top: 40px
        }
        .icons-wrap{
            right: 55px;
        }
    }
</style>