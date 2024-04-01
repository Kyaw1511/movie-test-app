<template>
    <div 
        class="container-fluid my-3 py-3" id="moviePage">
        <div class="row" >
            <div
                class="col-md-6">
                <!-- <img 
                    :src="`../public/${movie.imageSrc}`"  alt=""> -->
                <img 
                    :src="movie.imageSrc" alt="happy">
                
            </div>
            <div class="col-md-6 my-auto ">
                <div
                    class="d-flex justify-content-between">
                    <h4>{{ movie.title }}</h4>
                    <button
                        @click="goBack"
                        class="btn btn-primary">
                        Back
                    </button>
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
    import { useRoute, useRouter } from 'vue-router'
    import { ref, inject, computed } from 'vue';

    const route = useRoute()
    const router = useRouter()

    const movieId = parseInt(route.params.id)
    const movies = inject('movies')

    const movie = computed(() => {
        return movies.value.find(movie => {
            return movie.id === movieId
        })
    })

    const goBack = () => {
        router.go(-1)
    }
    

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
    #moviePage {
        min-height: 85vh;
    }
</style>