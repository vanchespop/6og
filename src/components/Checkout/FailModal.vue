<template>
    <transition name="fade">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" v-click-outside="toggleFailModal">
                    <div class="success__wrap">
                        <img class="galochka" src="../../../public/checkout/krestik.svg">
                        <p class="success"><span class="fail-border">Oops... something went wrong.</span>If you'd like
                            to try again, close the window and check all the fields.</p>
                    </div>
                    <button type="button" class="close" @click="toggleFailModal">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "FailModal",
        methods: {
            toggleFailModal() {
                this.$store.commit("Checkout/toggleFailModal");
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

    .fail-border {
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