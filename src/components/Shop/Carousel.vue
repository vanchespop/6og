<template>
    <div class="carousel" >
        <b-carousel
                id="carousel-1"
                controls
                :interval="99999999999"
                class="carousel"
        >
            <b-carousel-slide :key="item.id" v-for="(item) in dropFilter(items, this.$store.state.Items.selectedDrop)" :text="item.name">
                <template v-slot:img>
                    <router-link :to="{name: 'item', params: {id: item.id}}"><img
                            class="d-block img-fluid w-100"
                            :src='item.preview_img'
                            alt="item_preview"
                    ></router-link>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Carousel",
        methods: {
          dropFilter(items, drop) {
            return items.slice(drop.start, drop.end)
          }
        },
        computed: mapState({
            items: state => state.Items.items,
        }),
    }
</script>

<style scoped>
    .carousel {
        justify-self: center;
        align-self: auto;
        margin: auto;
        max-width: 450px;
        min-width: 250px;
        width: 50vw;
    }

    @media all and (max-width: 850px) {
        .carousel{
            max-width: 400px;
        }
    }

</style>