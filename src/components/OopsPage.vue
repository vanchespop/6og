<template>
        <main>
            <h1 class="oops">There's no future here... 404</h1>
        </main>
</template>

<script>
    export default {
        name: "OopsPage"
    }
</script>

<style scoped>
    main {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        background: #EEEDED;
    }

    .oops {
        margin: auto;
        justify-self: center;
        align-self: center;
        font-size: 64px;
        font-weight: bold;
    }
</style>