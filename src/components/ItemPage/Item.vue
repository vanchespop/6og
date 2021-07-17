<template>
    <main>
        <router-link to="/shop" class="logo__sm"><img src="../../../public/mainpage/logo_the_future.png"></router-link>
        <section class="carousel-section">
            <ItemCarousel :id="id"/>
        </section>
        <section class="main-section">
            <div class="item-info">
                <div class="first-block">
                    <p class="item-text">{{items[id - 1].name}}</p>
                    <hr>
                    <p class="item-text" v-if="items[id - 1].noSalePrice > items[id -1].price"><span style="text-decoration: line-through">{{items[id - 1].noSalePrice}}</span>₽</p>
                    <p class="item-text">{{items[id - 1].price}}₽</p>
                    <hr>
                    <p class="item-text" v-if="items[id - 1].oneSize === true"><span
                            style="vertical-align: top">size</span>
                        <input type="radio" name="size" id="onesize_check" checked @click="selectSize('s', id-1)"><label
                                for="onesize_check"
                                class="size-text" style="font-size: 2vw">ONESIZE</label></p>
                    <p class="item-text" v-else>
                        <span style="vertical-align: top">size</span>
                        <input type="radio" name="size" id="s_check" @click="selectSize('s', id-1)"><label
                            for="s_check"
                            class="size-text">S</label>
                        <input type="radio" name="size" id="m_check" checked @click="selectSize('m', id-1)"><label
                            for="m_check"
                            class="size-text">M</label>
                        <input type="radio" name="size" id="l_check" @click="selectSize('l', id-1)"><label for="l_check"
                                                                                                           class="size-text">L</label>
                        <input type="radio" name="size" id="xl_check" @click="selectSize('xl', id-1)"><label
                            for="xl_check"
                            class="size-text">XL</label>
                    </p>
                </div>
                <p class="item-description" v-html="items[id - 1].description"></p>
                <img class="item-table" :src='items[id - 1].sizeTable'>
                <button class="cart-button" @click="addProductToCart(items[id - 1])">ADD TO CART</button>
            </div>
        </section>

        <router-link to="/shop"><img class="logo__gog" src="../../../public/mainpage/6og.svg"></router-link>
        <CartModal/>
        <CartInstButtons/>
    </main>
</template>

<script>
    import ItemCarousel from "@/components/ItemPage/ItemCarousel";
    import {mapState, mapActions} from 'vuex'
    import CartModal from "@/components/ItemPage/CartModal"
    import CartInstButtons from "@/components/ItemPage/CartInstButtons";

    //TODO Доделать сайзы, убрать таггл модалки при ремуве итема
    export default {
        name: "Item",
        components: {CartInstButtons, CartModal, ItemCarousel},
        props: ['id'],
        computed: mapState({
            items: state => state.Items.items,
        }),
        methods: {
            toggleCartModal() {
                this.$store.commit("Cart/toggleCartModal");
            },
            selectSize(size, id) {
                this.$store.commit("Items/selectSize", {size, id});
            },
            ...mapActions('Cart', [
                'addProductToCart'
            ]),
        },
        mounted: function () {
            if ((window.body.classList.contains('modal__active')) && (this.$store.state.Cart.showCartModal === false)) {
                window.body.classList.remove('modal__active')
            } else if (this.$store.state.Cart.showCartModal === true) {
                window.body.classList.add('modal__active')
            }
        }
    }
</script>

<style scoped>
    main {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        z-index: 2;
        background: #EEEDED url("../../../public/mainpage/Resurs_1.svg") no-repeat center center;
        background-size: cover;
    }

    .carousel-section {
        width: 50%;
        display: flex;
        background: #EEEDED;
    }

    .main-section {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .first-block {
        margin-bottom: 15px;
    }


    .item-info {
        width: 75%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }

    .item-table {
        width: 80%;
        align-self: flex-start;
    }

    .item-text {
        font-size: 1.9vw;
        text-align: left;
        margin: 0;
    }

    .item-description {
        font-size: 1.3vw;
        text-align: left;
    }

    .cart-button {
        background: black;
        color: white;
        width: 40%;
        outline: none;
        border: none;
        margin: 30px 0 0 0;
        padding: 7px 5px;
    }

    .size-text {
        font-size: 2.3vw;
        text-align: left;
        font-weight: bold;
        margin: auto 20px;
    }

    .size-text:hover {
        transform: scale(1.1);
        transition: all .3s;
    }


    .romb {
        position: fixed;
        right: -25%;
        bottom: -10px;
        height: calc(100% + 20px);
        z-index: -1;
    }

    .logo__gog {
        position: absolute;
        bottom: 35px;
        right: 7%;
        width: 40%;
        max-width: 300px;
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"] + label {
        cursor: pointer;
    }


    input[type="radio"]:checked + label {
        text-decoration: underline;

    }

    hr {
        border: 1.5px black solid;
        margin: 10px 0;
        width: 65%;
    }

    .logo__sm {
        display: none;
    }

    @media all and (max-width: 1300px) {
        .item-info {
            width: 85%;
        }

        hr {
            width: 48%;
        }

    }

    @media all and (max-width: 1100px) {
        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
        }

        hr {
            width: 55vw
        }

        .logo__sm {
            display: block;
            align-self: flex-start;
            justify-self: flex-start;
            width: 60%;
            padding: 7%;
        }

        .logo__sm img {
            width: 100%;
        }

        .logo__gog {
            display: none;
        }

        .carousel-section {
            width: 100%;
            margin-bottom: 30px;
        }

        .main-section {
            width: 70%;
        }

        .first-block {
            align-items: center;

        }

        .item-text {
            font-size: 4vw;
        }

        .item-description {
            font-size: 3vw;
        }

        .size-text {
            font-size: 4.5vw;
        }
    }

    @media all and (max-width: 576px) {

        .item-table {
            width: 100%;
        }

        .cart-button {
            width: 100%;
        }

        .size-text {
            margin: 0 10px;
        }

        hr {
            border: none;
            border-top: 2px solid black;
        }
    }


</style>