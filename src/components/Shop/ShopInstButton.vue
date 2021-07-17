<template>
    <div class="shop-inst__wrap">
        <Inst class="logo__inst__static inst"/>
        <Dropdown></Dropdown>
    </div>
</template>

<script>
    import Inst from "@/components/Inst";
    import Dropdown from "@/components/Dropdown";

    export default {
        name: "ShopInstButton",
        components: {Inst, Dropdown}
    }
</script>

<style scoped>
    .shop-inst__wrap {
        position: absolute;
        top: 40px;
        right: 7%;
        display: grid;
        grid-template-columns: 34px 1fr;
        column-gap: 20px;
    }

    @media all and (max-width: 1100px) {
        .shop-inst__wrap {
            right: 80px;
        }
    }

    @media all and (max-width: 750px) {
        .inst {
            grid-column: 1;
            width: 34px;
            justify-self: flex-end;
        }
    }
    @media all and (max-width: 850px) {
        .shop-inst__wrap{
            right: 60px;
        }

        .shop-inst__wrap {
            justify-self: flex-end;
            grid-template-columns: auto;
            grid-template-rows: 1fr 1fr;
            row-gap: 10px;
            top: 74px;
        }

        .inst {
          justify-self: flex-end;
        }
    }

    @media all and (max-width: 585px) {
      .shop-inst__wrap{
        top: 40px;
      }

    }

    @media all and (max-width: 450px) {
      .shop-inst__wrap{
        row-gap: 5px;
        right: 30px;
      }

    }

</style>