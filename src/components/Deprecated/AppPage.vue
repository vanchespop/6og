<template>
    <main>
        <router-link to="/"><img class="logo__gog" src="../../../public/mainpage/6og.svg"></router-link>
        <img class="logo__future" src="../../../public/mainpage/future.svg">
        <router-link to="/" class="logo__gog-future"><img class="logo__capsule-future__img"
                                                          src="../../../public/mainpage/6og-future.svg">
        </router-link>
        <AppInstButton :name="'main'"/>
        <div class="wrap__desktop">
            <div class="step-wrap">
                <div class="step">
                    <p class="text">step 1</p>
                    <img src="../../../public/mainpage/app/qr-apps-apple-com.svg" class="step-img">
                    <p>1. Scan the QR-code to download
                        <span style="font-weight: bold">6OG AR</span> application to explore the
                        unknown future with AR technology.</p>
                </div>
                <div class="step">
                    <p class="text">step 2</p>
                    <img src="../../../public/mainpage/app/qr-verisium-com.svg" class="step-img">
                    <p>2. Scan the QR-code to download
                        the <span style="font-weight: bold">VERISIUM</span> application to get
                        the exclusive information using NFC technology.</p>
                </div>
            </div>
        </div>
        <div class="wrap__mobile">
            <div class="step-wrap">
                <div class="step">
                    <p class="text2">step 1</p>
                    <p>1. Click to download
                        <span style="font-weight: bold">6OG AR</span> application to explore the
                        unknown future with AR technology.</p>
                    <a href="https://apps.apple.com/us/app/6og-ar/id1483329987" class="step-img__mobile__wrap"><img
                        src="../../../public/mainpage/app/6og-AR.png" class="step-img__mobile"></a>

                </div>
                <div class="step">
                    <p class="text2">step 2</p>
                    <p>2. Click to download
                        the <span style="font-weight: bold">VERISIUM</span> application to get
                        the exclusive information using NFC technology.</p>
                    <a href="https://verisium.com/getapp/" class="step-img__mobile__wrap"><img
                        src="../../../public/mainpage/app/verisium.png" class="step-img__mobile"></a>
                </div>
            </div>
        </div>
        <img class="logo__capsule" src="../../../public/mainpage/capsule.svg">
    </main>
</template>

<script>
    import AppInstButton from "@/components/Shop/AppInstButton";

    export default {
        name: "AppPage",
        components: {AppInstButton}
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
        flex-direction: column;
        padding: 160px 0;
    }

    .wrap__desktop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .text {
        color: white;
        display: inline-block;
        background: #101010;
        padding: 0 10px 2px;
        text-align: left;
        align-self: center;

    }

    .wrap__mobile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }


    .AppButton {
        position: absolute;
        top: 40px;
        left: calc(50% - 35px);
    }

    .step-wrap {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 20%;
        margin: auto;
    }

    .step {
        padding: 5px;
        display: flex;
        flex-direction: column;
    }

    .step-img {
        margin-bottom: 30px;
        align-self: center;
        width: 100%;
        max-width: 294px;
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

    .logo__gog-future {
        position: absolute;
        top: 40px;
        left: 7%;
        width: 60%;
        max-width: 350px;
        display: none;
    }

    .text2 {
        color: white;
        display: inline-block;
        background: #101010;
        padding: 0 10px 2px;
        text-align: left;
        align-self: flex-start;
    }


    .wrap__mobile {
        display: none;
    }

    .step-img__mobile__wrap {
        margin-bottom: 30px;
        align-self: center;
        width: 80%;
    }

    .step-img__mobile {
        width: 100%;
    }

    .logo__capsule-future__img {
        width: 100%;
    }

    @media all and (max-width: 850px) {
        main {
            justify-content: flex-start;
            padding: 0;
        }

        .logo__gog, .logo__future {
            display: none;
        }

        .logo__capsule {
            display: none;
        }

        .logo__capsule {
            top: auto;
            bottom: 30px;
            left: 7%;

        }

        .logo__gog-future {
            display: block;
            position: static;
            margin: 40px 0 30px 7%;
        }
    }

    @media all and (max-height: 760px) {
        main {
            justify-content: flex-start;
            padding: 0;
        }

        .logo__gog, .logo__future {
            display: none;
        }

        .logo__capsule {
            display: none;
        }

        .logo__capsule {
            top: auto;
            bottom: 30px;
            left: 7%;

        }

        .logo__gog-future {
            display: block;
            position: static;
            margin: 40px 0 30px 7%;
        }
    }

    @media all and (max-width: 750px) {
        .wrap__desktop {
            display: none
        }

        .wrap__mobile {
            display: block;
        }
    }

    @media all and (max-width: 400px) {
        .logo__gog-future {
            margin: 40px 0 30px 7%;
        }
    }


</style>