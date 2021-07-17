<template>
  <main>
    <div class="wrapper" v-if="orderFound">
      <div class="container">
        <div class="tick"><img src="../../../public/checkout/galochka.svg" width="60px" height="60px"></div>
        <div class="header">
          <div class="thank-you">Thank you, {{ this.$route.query.name }}</div>
          <div class="order-confirmed">Your order is confirmed</div>
        </div>
      </div>
      <div class="order-num">ORDER #{{ this.$route.query.orderid }}</div>
      <p class="info">
        We’ve accepted your order, and we’re getting it ready.
      </p>
      <div>
        <ShopButton :text="'CONTINUE SHOPPING'"></ShopButton>
      </div>
    </div>
  </main>
</template>

<script>
import ShopButton from "../ShopButton";


const axios = require('axios').default;
export default {
  name: "Success",
  data () {
    return { orderFound: false }
  },
  components: {ShopButton},
  beforeMount() {
    const id = this.$route.query.orderid || 0;
    axios.get('https://6og.ooo/api/orders')
        .then(res => {
          if(res.data.findIndex(el => el.id === id) === -1) {
            this.$router.push('/checkout')
          } else {
            this.$store.commit("Cart/clearCart");
            this.orderFound = true;
          }
        })
  }
}
</script>

<style scoped>
main, .container, .thank-you, .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background: #eeeded;
}

.order-num {
  font-weight: bold;
}

.header {
  flex-direction: column;
}

.wrapper {
  margin: 0 25px;
  height: 100vh;
  flex-direction: column;
}

.info {
  margin-bottom: 60px;
  text-wrap: normal;
}

.thank-you {

}
</style>