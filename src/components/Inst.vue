<template>
    <a :light="light" class="inst" href="https://www.instagram.com/6og/" target="_blank">
      <img v-if="!light" class="logo__inst absolute" src="../../public/mainpage/inst.svg">
      <img v-else class="logo__inst" src="../../public/mainpage/inst_white.svg">
    </a>
</template>

<script>
    export default {
        name: "Inst",
        props: ['light']
    }
</script>

<style scoped>
    .logo__inst {
        width: 34px;
        min-width: 34px;
        transition: all .2s;
    }

    .absolute {
      position: absolute;
      top: 60px;
      right: 7%;
    }

    .logo__inst:hover {
        opacity: 0.6;
    }

    .logo__inst__static img {
        position: static;
    }

    @media all and (max-width: 850px) {
        .logo__inst {
            top: 40px
        }

    }

</style>