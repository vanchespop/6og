<template>
    <div class="" v-bind:class="light ? 'shop-inst-centered' : 'shop-inst__wrap'">
        <Inst class="logo__inst__static inst" :light="light" v-bind:class="light ? 'gap' : ''"/>
        <ShopButton class="shop-btn" :name="name" :light="light" :text="text"/>
        <Dropdown :visible="visible"></Dropdown>
    </div>
</template>

<script>
    import ShopButton from "@/components/ShopButton";
    import Inst from "@/components/Inst";
    import Dropdown from "@/components/Dropdown";

    export default {
        name: "ShopInstButton",
        props:['name', 'light', 'text', 'visible'],
        components: {Inst, ShopButton, Dropdown}
    }
</script>

<style scoped>
    .shop-inst__wrap {
        position: absolute;
        top: 40px;
        right: 7%;
        display: grid;
        grid-template-columns: 30px 1fr 1fr;
        column-gap: 20px;
    }

    .shop-inst-centered {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 250px;
    }

    .gap {
      margin-right: 100px;
    }

    @media all and (max-width: 1100px) {
        .shop-inst__wrap {
            right: 80px;
        }
    }

    @media all and (max-width: 750px) {
        .inst {
            grid-column: 1;
            width: 30px;
            justify-self: flex-end;
        }
      .shop-btn {
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
            grid-template-rows: 1fr 1fr 1fr;
            row-gap: 10px;
        }
        @media all and (max-width: 450px) {
            .shop-inst__wrap{
                right: 30px;
            }

        }

    }

</style>