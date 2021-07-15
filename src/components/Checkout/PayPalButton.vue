<template>
    <div class="paypal-buttons"></div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    const axios = require('axios').default;

    export default {
        name: "PayPalButton",
        props: ['isInvalid', 'validate'],
        computed: {
            ...mapState({
                checkoutStatus: state => state.Cart.checkoutStatus,
            }),
            ...mapGetters({
                    total: 'Cart/cartTotalPrice',
                    countryCode: 'Checkout/countryCode',
                    shipCost: 'Checkout/shipCost'
                },
            ),
            finalCart: {
                get() {
                    return this.$store.state.Cart.finalCart
                }
            },
            email: {
                get() {
                    return this.$store.state.Checkout.email
                },
                set(value) {
                    this.$store.commit('updateEmail', value)
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
                    this.$store.commit('updateFirstName', value)
                }
            },
            lastName: {
                get() {
                    return this.$store.state.Checkout.lastName
                },
                set(value) {
                    this.$store.commit('updateLastName', value)
                }
            },
            address: {
                get() {
                    return this.$store.state.Checkout.address
                },
                set(value) {
                    this.$store.commit('updateAddress', value)
                }
            },
            city: {
                get() {
                    return this.$store.state.Checkout.city
                },
                set(value) {
                    this.$store.commit('updateCity', value)
                }
            },
            country: {
                get() {
                    return this.$store.state.Checkout.country
                },
                set(value) {
                    this.$store.commit('updateCountry', value)
                }
            },
            region: {
                get() {
                    return this.$store.state.Checkout.region
                },
                set(value) {
                    this.$store.commit('updateRegion', value)
                }
            },
            postalCode: {
                get() {
                    return this.$store.state.Checkout.postalCode
                },
                set(value) {
                    this.$store.commit('updatePostalCode', value)
                }
            },

        },
        methods: {
            postOrder: (order) => {
                let session_url = 'https://6og.ooo/api/paypal';
                return new Promise(() => {
                    axios({
                        method: 'post',
                        url: session_url,
                        data: {
                            order
                        }
                    })
                        .then(res => {
                            // eslint-disable-next-line no-console
                            console.log(order)
                            // eslint-disable-next-line no-console
                            console.log(res)
                        })
                        .catch(err => {
                            // eslint-disable-next-line no-console
                            console.log(order)
                            // eslint-disable-next-line no-console
                            console.log(err)
                        })
                })
            },
        },
        mounted: function () {
            var that = this;
            // var paypalActions;
            window.paypal.Buttons({
                createOrder: function (data, actions) {
                    const total = that.total + '';
                    const email = that.email + '';
                    const firstName = that.firstName + '';
                    const lastName = that.lastName + '';
                    const address = that.address + '';
                    const city = that.city + '';
                    const region = that.region + '';
                    const countryCode = that.countryCode + '';
                    const postalCode = that.postalCode + '';
                    const finalCart = that.finalCart;
                    const shipCost = that.shipCost + '';
                    const finalCost = (that.total + that.shipCost) + '';
                    const phone = that.phone + ''
                    return actions.order.create({
                        intent: "CAPTURE",
                        application_context: {
                            shipping_preference: "SET_PROVIDED_ADDRESS",
                        },
                        payer: {
                            name: {
                                given_name: firstName,
                                surname: lastName
                            },
                            email_address: email
                        },
                        purchase_units: [
                            {
                                description: firstName + " " + lastName + ";" + email+ ";" + phone,
                                amount: {
                                    currency_code: 'RUB',
                                    value: finalCost,
                                    breakdown: {
                                        item_total: {
                                            currency_code: 'RUB',
                                            value: total
                                        },
                                        shipping: {
                                            currency_code: 'RUB',
                                            value: shipCost
                                        }
                                    }
                                },
                                shipping: {
                                    address: {
                                        address_line_1: address,
                                        admin_area_2: city,
                                        admin_area_1: region,
                                        postal_code: postalCode,
                                        country_code: countryCode
                                    }
                                },
                                items: finalCart
                            }
                        ],
                    });
                },
                onApprove: function (data, actions) {
                    return actions.order.get().then(function (orderDetails) {
                            that.postOrder(orderDetails);
                            return actions.order.capture().then(
                                function () {
                                    that.$store.commit("Cart/clearCart")
                                    that.$store.commit("Checkout/toggleSuccessModal")
                                }
                            )
                        }
                    );
                },
                onError() {
                    that.validate.$touch()
                },
            }).render('.paypal-buttons')
        },
        //TODO Доделать отключение кнопки при не прохождении валидации
    }

</script>

<style scoped>
    .paypal-buttons {
        margin: auto;
    }
</style>