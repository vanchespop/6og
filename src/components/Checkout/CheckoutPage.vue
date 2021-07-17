<template>
    <main>
        <section class="checkout" id="style-2">
            <div class="checkout__content-wrap">
                <div class="checkout__section">
                    <a @click="$router.push(`${backUrl}`)" class="checkout__return">
                        <img class="checkout__arrow-img" src="../../../public/checkout/next.svg">
                        Return to item
                    </a>
                </div>
                <div class="checkout__section">
                    <h2 class="section-title">Contact information</h2>
                    <div>
                        <input class="input-wrap__input" placeholder="Email" v-model.trim="$v.email.$model">
                        <p class="error" v-if="(!$v.email.required) && ($v.email.$dirty)">Field is required.</p>
                        <p class="error" v-if="!$v.email.email">Email is incorrect.</p>
                    </div>
                    <div>
                        <input class="input-wrap__input" placeholder="Phone" v-model.trim="$v.phone.$model">
                        <p class="error" v-if="(!$v.phone.required) && ($v.phone.$dirty)">Field is required.</p>
                    </div>
                </div>
                <div class="checkout__section">
                    <h2 class="section-title">Shipping address</h2>
                    <div class="section__name">
                        <div>
                            <input class="input-wrap__input" placeholder="First name" v-model="$v.firstName.$model">
                            <p class="error" v-if="(!$v.firstName.required) && ($v.firstName.$dirty)">Field is
                                required.</p>
                        </div>
                        <div>
                            <input class="input-wrap__input" placeholder="Last name" v-model="$v.lastName.$model">
                            <p class="error" v-if="(!$v.lastName.required) && ($v.lastName.$dirty)">Field is
                                required.</p>
                        </div>
                    </div>
                    <div><input class="input-wrap__input" placeholder="Address" v-model="$v.address.$model">
                        <p class="error" v-if="(!$v.address.required) && ($v.address.$dirty)">Field is required.</p>
                    </div>
                    <div><input class="input-wrap__input" placeholder="City" v-model="$v.city.$model">
                        <p class="error" v-if="(!$v.city.required) && ($v.city.$dirty)">Field is required.</p></div>

                    <div class="section__address">
                        <div>
                            <select class="input-wrap__input" required v-model="$v.country.$model">
                                <option value="" hidden>Country</option>
                                <option v-for="country in countries" v-bind:key="country.Code">{{country.Name}}</option>
                            </select>
                            <p class="error" v-if="(!$v.country.required) && ($v.country.$dirty)">Field is required.</p>
                        </div>
                        <div>
                            <input class="input-wrap__input" placeholder="Region" v-model="$v.region.$model">
                            <p class="error" v-if="(!$v.region.required) && ($v.region.$dirty)">Field is required.</p>
                        </div>
                        <div>
                            <input class="input-wrap__input" placeholder="Zip code" v-model="$v.postalCode.$model">
                            <p class="error" v-if="(!$v.postalCode.required) && ($v.postalCode.$dirty)">Field is
                                required.</p>
                        </div>
                    </div>
                </div>
                <h2 class="section-title">Shipping</h2>
                <div class="checkout__bordered-section" style="margin-bottom: 30px">
                    <p class="checkout__delivery">Russia: FREE</p>
                    <p class="checkout__delivery">WorldWide: DHL $15/1.000₽</p>
                </div>
                <div class="checkout__section">
                    <div class="checkout__pay-section">
                        <YandexKassa :validate="this.$v" :isInvalid="this.$v.$invalid"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="checkout-cart" id="style-1">
            <div class="checkout__items-wrap">
                <div class="items-wrap">
                    <div class="cart-item" v-for="(item, index) in items" :key="index + item.name">
                        <img class="cart-item__img" :src="item.img">
                        <div class="cart-item__info">
                            <p class="cart-item__name">{{item.name}}</p>
                            <div class="cart-item__params">
                                <p class="cart-item__size" :class="{item__size: item.selectedSize.length > 3}">
                                    {{item.selectedSize}}</p>
                                <p class="cart-item__price">{{item.price}}₽*{{item.quantity}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-item__subtotal">
                    <div class="subtotal-row">
                        <p>subtotal</p>
                        <p>{{total}}₽</p>
                    </div>
                    <div class="subtotal-row">
                        <p>shipping</p>
                        <p>{{shipCost}}₽</p>
                    </div>
                </div>
                <div class="total-row">
                    <p>TOTAL</p>
                    <p>{{total+shipCost}}₽</p>
                </div>
            </div>
            <img class="logo__gog" src="../../../public/mainpage/6og_white.svg">
        </section>
        <FailModal v-if="failModal"/>
    </main>
</template>

<script>
    //TODO СДЕЛАТЬ ПРОВЕРКУ НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ СТРАНЫ
    import {mapGetters, mapState} from 'vuex'
    import {email, required} from 'vuelidate/lib/validators'
    import FailModal from "@/components/Checkout/FailModal";
    import YandexKassa from "@/components/Checkout/YandexKassa";

    export default {
        name: "CheckoutPage",
        components: {YandexKassa, FailModal},
        validations: {
            email: {
                required,
                email
            },
            phone:{
                required
            },
            firstName: {
                required,
            },
            lastName: {
                required
            },
            address: {
                required
            },
            city: {
                required
            },
            country: {

                required
            },
            region: {
                required
            },
            postalCode: {
                required
            }
        },
        computed: {
            ...mapGetters({
                countryCode: 'Checkout/countryCode',
                total: 'Cart/cartTotalPrice',
                shipCost: 'Checkout/shipCost'
            }),
            ...mapState({
                items: state => state.Cart.items,
                successModal: state => state.Checkout.successModal,
                failModal: state => state.Checkout.failModal,
                countries: state => state.Checkout.countries,
                backUrl: state => state.Cart.lastItem
            }),
            email: {
                get() {
                    return this.$store.state.Checkout.email
                },
                set(value) {
                    this.$store.commit('Checkout/updateEmail', value)
                }
            },
            phone: {
                get() {
                    return this.$store.state.Checkout.phone
                },
                set(value) {
                    this.$store.commit('Checkout/updatePhone', value)
                }
            },
            firstName: {
                get() {
                    return this.$store.state.Checkout.firstName
                },
                set(value) {
                    this.$store.commit('Checkout/updateFirstName', value)
                }
            },
            lastName: {
                get() {
                    return this.$store.state.Checkout.lastName
                },
                set(value) {
                    this.$store.commit('Checkout/updateLastName', value)
                }
            },
            address: {
                get() {
                    return this.$store.state.Checkout.address
                },
                set(value) {
                    this.$store.commit('Checkout/updateAddress', value)
                }
            },
            city: {
                get() {
                    return this.$store.state.Checkout.city
                },
                set(value) {
                    this.$store.commit('Checkout/updateCity', value)
                }
            },
            country: {
                get() {
                    return this.$store.state.Checkout.country
                },
                set(value) {
                    this.$store.commit('Checkout/updateCountry', value)
                }
            },
            region: {
                get() {
                    return this.$store.state.Checkout.region
                },
                set(value) {
                    this.$store.commit('Checkout/updateRegion', value)
                }
            },
            postalCode: {
                get() {
                    return this.$store.state.Checkout.postalCode
                },
                set(value) {
                    this.$store.commit('Checkout/updatePostalCode', value)
                }
            },
        },
        mounted: function () {
            if (window.body.classList.contains('modal__active')) {
                window.body.classList.remove('modal__active')
            }
        }
    }
</script>

<style scoped>

    main {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
    }

    .checkout {
        width: 55%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        max-height: 100vh;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        direction: rtl;
    }

    .checkout__content-wrap {
        width: 80%;
        height: 100%;
        max-height: 100vh;
        margin: 60px auto 0px;
        display: flex;
        flex-direction: column;
        direction: ltr;

    }

    .checkout__items-wrap {
        width: 90%;
        height: 100%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;
    }

    .checkout__section {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    .checkout__bordered-section {
        width: 100%;
        padding: 20px 20px 0 20px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        position: relative;

    }


    .checkout__pay-section {
        width: 50%;
        margin: auto;

    }

    .section-title {
        font-size: 18px;
        color: #333333;
        text-align: left;
        margin-bottom: 20px;
    }

    .section__name {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
    }

    .section__address {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        column-gap: 10px;
    }

    .checkout__return {
        font-size: 12px;
        color: #101010;
        cursor: pointer;
        display: flex;
        margin: 0;
        line-height: 12px;
    }


    .checkout__arrow-img {
        width: 12px;
        height: 12px;
        padding: 0;
        margin: 0 5px 0 0;
        line-height: 12px;
    }

    .input-wrap__input {
        border: 1px #d9d9d9 solid;
        background-clip: padding-box;
        border-radius: 5px;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        padding: 0.92857em 0.78571em;
        word-break: normal;
        line-height: inherit;
        height: 45px;
        font-size: 12px;
        transition: all 0.2s ease-out;
        outline: none;
        margin-bottom: 15px;
        background: white;
    }

    select:not(:focus):invalid {
        color: #7a7a7a;
    }

    .input__error {
        border: 1px #ae0000 solid;
    }

    .checkout__delivery {
        text-align: left;
        margin: 0;
        font-size: 14px;
        margin-bottom: 15px;
    }

    .input-wrap__input:focus {
        transition: all 0.2s ease-out;
        border: 1px #101010 solid;
    }

    .checkout-cart {
        width: 45%;
        height: 100%;
        background: #101010;
        min-height: 100vh;
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: space-between;
    }

    .cart-item__subtotal {
        border-bottom: 2px white solid;
        border-top: 2px white solid;
        padding: 10px;

    }

    .subtotal-row {
        display: flex;
        justify-content: space-between;
        color: white;
    }

    .total-row {
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 10px;
    }

    .subtotal-row p {
        font-size: 18px;
        margin: 0;
    }

    .cart-item {
        display: grid;
        grid-template-columns: 30% 1fr;
        column-gap: 20px;
        margin: 20px 0;
        max-width: 100%;
    }


    .cart-item__info {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .cart-item__name {
        font-size: 28px;
        margin-bottom: 4px;
        text-overflow: ellipsis;
        color: white;
    }

    .cart-item__params {
        display: flex;
        justify-content: space-between;
    }

    .cart-item__size {
        font-weight: bold;
        font-size: 36px;
        color: white;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    .cart-item__price {
        font-size: 36px;
        margin-bottom: 4px;
        color: white;
    }

    .cart-item__img {
        width: 100%;
    }

    .logo__gog {
        width: 40%;
        align-self: flex-end;
        margin-bottom: 40px;
        margin-right: 40px;
        height: auto;
        max-width: 250px;
    }

    .item__size {
        font-size: 36px;
    }


    #style-1::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #101010;
    }

    #style-1::-webkit-scrollbar {
        width: 8px;
        background-color: #101010;
    }

    #style-1::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: white;
    }


    #style-2::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #ffffff;
    }

    #style-2::-webkit-scrollbar {
        width: 8px;
        background-color: #ffffff;
    }

    #style-2::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #101010;
    }

    .error {
        color: #e60000;
        font-size: 12px;
        text-align: left;
        margin-top: -13px;
        margin-left: 5px;
    }

    @media all and (max-width: 1300px) {
        main {
            flex-direction: column-reverse;
        }

        .checkout {
            width: 100%;
            height: auto;
            max-height: 99999px;
        }

        .cart-item__name {
            font-size: 4vw;
        }

        .checkout-cart {
            width: 100%;
            height: auto;
            min-height: auto;
            max-height: 99999px;
        }

        .checkout__items-wrap {
            margin: 30px auto;
        }

        .logo__gog {
            width: 50%;
        }

        .checkout__pay-section {
            width: auto;
        }

        .checkout__content-wrap {
            max-height: 999999px;
        }

        .cart-item__size {
            font-size: 5vw;
        }

        .cart-item__price {
            font-size: 5vw;
        }
    }

    @media all and (max-width: 1300px) {
        .checkout__pay-section {
            width: 60%;
        }
    }

    @media all and (max-width: 548px) {
        .checkout__pay-section {
            width: 80%;
        }
    }

</style>