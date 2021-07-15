<template>
    <div class="carousel">
        <b-carousel
                id="carousel-1"
                controls
                :interval="9999999"
                class="carousel"
                :img-height="700"
        >
            <b-carousel-slide v-for="(img, index) in items[id - 1].img" :key="index">
                <template v-slot:img>
                    <img
                            class="d-block carousel__img"
                            :src='img'
                            alt=""
                    >
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    //TODO Пофиксить большие изображения
    import {mapState} from 'vuex'

    export default {
        name: "ItemCarousel",
        props: ['id'],
        computed: mapState({
            items: state => state.Items.items,
        }),
        data: function () {
            return {
                img: require('../../../public/mainpage/Carousel/Example.png')
            }
        }
    }
</script>

<style scoped>
    .carousel {
        justify-self: center;
        align-self: center;
        width: 100%;
        margin: auto;
    }

    .carousel__img {
        width: 100%;
        max-height: 100vh;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        margin: auto;
    }

    @media screen and (max-width: 1100px) {
        .carousel__img {
            max-height: 62vw;
            width: auto;
        }
    }


</style>