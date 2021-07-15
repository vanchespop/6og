<template>
    <main>
        <div></div>
        <img class="logo__capsule" src="../../../public/mainpage/capsule.svg">
        <img class="logo__gog" src="../../../public/mainpage/6og.svg">
        <img class="logo__future" src="../../../public/mainpage/future.svg">
        <router-link to="/" class="logo__capsule-future"><img class="logo__capsule-future__img" src="../../../public/mainpage/6og-future.svg"></router-link>
        <ShopInstButton :name="'main'" :text="'MAIN'" :visible="true"/>
        <Carousel/>
    </main>
</template>

<script>
    import Carousel from "@/components/Shop/Carousel";
    import {mapState} from 'vuex'
    import ShopInstButton from "@/components/Shop/ShopInstButton";

    export default {
        name: "MainShopPage",
        components: {ShopInstButton, Carousel},
        computed: mapState({
            items: state => state.Items.items,
        }),
        mounted: function () {
            if (window.body.classList.contains('modal__active')) {
                window.body.classList.remove('modal__active')
            }33
        }
    }
</script>

<style scoped>

    main {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        margin: auto;
        display: flex;
        background: #EEEDED url("../../../public/mainpage/Resurs_1.svg") no-repeat fixed center center;
        background-size: cover;
        padding: 160px 0;
    }

    .logo__capsule {
        position: absolute;
        top: 60px;
        left: 7%;
        min-width: 250px;
        max-width: 300px;
        width: 30%;
    }


    .logo__gog {
        position: absolute;
        bottom: 60px;
        left: 7%;
        width: 40%;
        max-width: 300px;
    }

    .logo__future {
        position: absolute;
        bottom: 60px;
        right: 7%;
        width: 30%;
        max-width: 250px;
    }

    .logo__capsule-future {
        position: absolute;
        top: 40px;
        left: 7%;
        width: 60%;
        max-width: 400px;
        display: none;
    }

    .logo__capsule-future__img {
        width: 100%;
    }

    @media all and (max-width: 850px) {
        main{
            padding: 0;
        }

        .logo__gog, .logo__future {
            display: none;
        }

        .logo__capsule {
            top: auto;
            bottom: 30px;
            left: 7%;

        }

        .logo__capsule-future {
            display: block;
        }




    }
</style>