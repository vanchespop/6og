<template>
    <button class="yandex-button" @click="postOrder(isInvalid, validate)">
        <span class="yandex-button__wrap">
            Complete Order
<!--            <img class="yandex-button__yandex" src="../../../public/checkout/yandexcheckout.png">-->
            <img class="yandex-button__icon" src="../../../public/checkout/card.png">
            <img class="yandex-button__icon ap" src="../../../public/checkout/applepay.svg">
            <img class="yandex-button__icon gp" src="../../../public/checkout/googlepay.svg">
        </span>
    </button>
</template>

<script>

    export default {
        name: "YandexKassa",
        props: ['isInvalid', 'validate'],
        methods: {
            postOrder: function (isInvalid, validate) {
                if (isInvalid) {
                    validate.$touch()
                } else {
                    this.$store.dispatch("Checkout/postOrder");
                }
            },
        }
    }
</script>

<style scoped>
    .yandex-button {
        width: 100%;
        padding: 3px;
        min-width: 200px;
        margin-bottom: 14px;
        background: transparent;
        border : 2px solid #101010;
        color: #101010;
        font-weight: 500;
    }

    .yandex-button:hover{
      opacity: 0.6;
    }

    .yandex-button__wrap {
        height: 100%;
    }

    .yandex-button__yandex {
        height: 37%;
    }

    .yandex-button__icon {
        height: 60%;
        margin-left: 10px;
    }

    .ap {
      height: 95%;
    }

    .gp {
      height: 45%;
    }

    @media only screen and (min-width: 75px) {
        .yandex-button {
            height: 25px;
            min-height: 25px;
            max-height: 30px;
        }
    }

    @media only screen and (min-width: 150px) {
        .yandex-button {
            height: 25px;
            min-height: 25px;
            max-height: 55px;
        }
    }

    @media only screen and (min-width: 200px) {
        .yandex-button {
            height: 35px;
            min-height: 35px;
            max-height: 55px;
        }
    }

    @media only screen and (min-width: 300px) {
        .yandex-button {
            height: 45px;
            min-height: 30px;
            max-height: 55px;
        }
    }
</style>