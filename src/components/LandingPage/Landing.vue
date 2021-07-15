<template>
  <main>
    <ShopInstButton :name="'shop'" :light="true" :text="'SHOP'"/>
  </main>
</template>

<script>
import ShopInstButton from "@/components/Shop/ShopInstButton";

export default {
  name: "Landing",
  components: {ShopInstButton},
}
</script>

<style scoped>

main {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  background: url("../../../public/landing/landingPC.gif") no-repeat fixed center center;
  background-size: cover;
}

@media (max-width: 590px) {
  main {
    background: url("../../../public/landing/landingMD.gif") no-repeat fixed center center;
    background-size: cover;
  }

}
</style>