<template>
    <router-link class="shop" to="/shop"  :light="light" :text="text">
        <button class="shop-button" v-bind:class="light ? 'light' : ''">{{ text }}</button>
    </router-link>
</template>

<script>
    export default {
        name: "ShopButton",
        props: ['light', 'text']
    }
</script>

<style scoped>
    .shop-button {
        padding: 3px 20px;
        background: transparent;
        border : 2px solid #101010;
        color: #101010;
        font-weight: 500;
        text-decoration: none;
    }
    .light {
      border : 2px solid #ffffff;
      color: #ffffff;
    }
    .shop-button:hover{
        opacity: 0.6;
    }
    a:hover {
      text-decoration: none;
    }
</style>