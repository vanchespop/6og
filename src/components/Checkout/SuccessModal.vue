<template>
    <transition name="fade">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" v-click-outside="toggleSuccessModal">
                    <div class="success__wrap">
                        <img class="galochka" src="../../../public/checkout/galochka.svg">
                        <p class="success"><span class="success-border">Your order is confirmed.</span>
                            We’ve accepted your order, and we’re getting it ready.
                            Order confirmation will be emailed to you shortly.</p>
                    </div>
                    <button type="button" class="close" @click="toggleSuccessModal">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SuccessModal",
        methods: {
            toggleSuccessModal() {
                this.$store.commit("Checkout/toggleSuccessModal");
                location.href ='https://6og.ooo'
            },
        }
    }
</script>

<style scoped>


    .modal-mask {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .5s ease;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 40%;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Roboto;
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        min-height: 250px;
        min-width: 300px;
        max-width: 550px;
    }

    .success__wrap {
        margin: auto;
        padding: 20px;
    }

    .galochka {
        width: 35%;
        max-width: 250px;
    }

    .success {
        font-family: GT-America;
        font-size: 1.5vw;
        margin: 0;
    }

    .close {
        position: absolute;
        top: 5px;
        right: 10px;
    }

    .success-border {
        font-weight: bold;
        display: block;
    }

    @media all and (max-width: 800px) {
        .success {
            font-size: 14px;
        }
    }
    @media all and (min-width: 1300px) {
        .success {
            font-size: 24px;
        }
    }
</style>