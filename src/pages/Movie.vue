<template>
    <div 
        class="container-fluid my-3 py-3" id="moviePage">
        <div class="row" >
            <div
                class="col-md-6">
                <img :src="`../public/${movie.imageSrc}`"  alt="">
                
            </div>
            <div class="col-md-6 my-auto ">
                <div
                    class="d-flex justify-content-between">
                    <h4>{{ movie.title }}</h4>
                    <router-link
                        :to="{name: 'home'}"
                        class="btn btn-sm btn-primary">
                        <i class="fa-solid fa-backward"></i>
                    </router-link>   
                </div>
                
                <div>
                    <router-link
                        :to="{
                            name: 'movieOverview'}"
                        class="btn btn-lg border border-info m-1 rounded">
                        Overview
                    </router-link>
                    <router-link
                        :to="{
                            name: 'movieTrailer', params: {id: movie.id} }"
                        class="btn btn-lg border border-info m-1 rounded">
                        Trailer
                    </router-link>
                    <router-link
                        :to="{
                            name: 'movieArtists', params: {id: movie.id} }"
                        class="btn btn-lg border border-info m-1 rounded">
                        Artists
                    </router-link>
                </div>
                <router-view class="mt-2"></router-view>
            </div>
        </div>
    </div>
</template>  

<script setup>
    import { useRoute } from 'vue-router'
    import { ref, inject, computed } from 'vue';
import MovieOverview from './MovieOverview.vue';

    const route = useRoute()

    const movieId = parseInt(route.params.id)
    const movies = inject('movies')

    const movie = computed(() => {
        return movies.value.find(movie => {
            return movie.id === movieId
        })
    })
    

</script>

<style scoped>
    #moviePage img{
        /* border: 2px solid green; */
        border-radius: 16px;
        width: 100%;
    }
    #moviePage p {
        text-indent: 50px;
        text-align: justify;
    }
</style>