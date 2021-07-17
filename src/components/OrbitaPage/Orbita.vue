<template>
  <main>
    <div class="shop">
      <ShopButton :light="true" :text="'SHOP'"></ShopButton>
    </div>
    <div>
      <img class="instruction" src="../../../public/orbita/instruction_cropped.gif">
    </div>
    <div class="inst">
      <Inst :light="true"></Inst>
    </div>
  </main>
</template>

<script>
  import Inst from "@/components/Inst";
  import ShopButton from "@/components/ShopButton";
export default {
  name: "Orbita",
  components: {Inst, ShopButton}
}
</script>

<style scoped>
main {
  width: 100%;
  background-color: #000000;
}


  main {
    width: 100vw;
  }


.shop, .inst {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}

.instruction {
  width: 100%;
}

@media all and (min-width: 1200px) {

}


</style>