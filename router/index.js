import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"
import MainShopPage from "@/components/Shop/MainShopPage";
import LandingPage from "@/components/LandingPage/Landing";
import OrbitaPage from "@/components/OrbitaPage/Orbita";
import Item from "@/components/ItemPage/Item";
import CheckoutPage from "@/components/Checkout/CheckoutPage";
import Success from "../src/components/Checkout/Success";
import OopsPage from "@/components/OopsPage";
import Orders from "../src/components/OrdersPage/Orders";

Vue.use(Router)


const router = new Router({
    store,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: LandingPage
        },
        {
            path: '/orbita',
            name: 'orbita',
            component: OrbitaPage
        },
        {
            path: '/shop',
            name: 'shop',
            component: MainShopPage
        },
        {
            path: '/item/:id',
            component: Item,
            name: 'item',
            props: true,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutPage
        },
        {
            path: '/orders',
            component: Orders
        },
        {
            path: '/success',
            component: Success
        },
        {
            path: '*',
            component: OopsPage
        },


    ]
});

export default router
