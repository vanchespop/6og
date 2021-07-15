<template>
    <div class="icons-wrap">
        <ShoppingCartIcon/>
        <Inst :class="{logo__inst__static: true}"/>
    </div>

</template>

<script>
    import ShoppingCartIcon from "@/components/ItemPage/ShoppingCartIcon";
    import Inst from "@/components/Inst";

    export default {
        name: "CartInstButtons",
        components: {Inst, ShoppingCartIcon}
    }
</script>

<style scoped>

    .icons-wrap {
        position: absolute;
        top: 7%;
        right: 7%;
        display: grid;
        grid-template-columns: 30px 30px;
        height: 30px;
        column-gap: 10px;
    }

    @media all and (max-width: 1100px) {
        .icons-wrap {
            right: 80px;
        }
    }
    @media all and (max-width: 850px) {
        .icons-wrap{
            right: 60px;
        }
    }
</style>