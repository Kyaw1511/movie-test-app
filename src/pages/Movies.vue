<template>
    <div
        class="container pt-5">
        <h5
            class="mt-5 mb-3">
            Explore movies
        </h5>
        <div class="row g-4">
            <div 
                v-for="movie in movies" :key="movie.id"
                class="col-md-3 my-3">
                <div 
                    class="card card-body p-0 overflow-hidden">
                    <img
                        :src="`images/${movie.imageSrc}`"
                        class="img-fluid rounded-2 py-1 w-100 object-fit-contain" 
                        style="height: 200px;"
                        alt="unkown 1">
                    <!-- <img 
                        :src="`../images/${movie.imageSrc}`" alt="">     -->
                    <div class="py-2 text-center">
                        <p class="">
                            {{ movie.title }}
                        </p>
                        <!-- <router-link 
                            :to="`/movie-test-app/movies/${movie.id}`"
                            class="btn btn-sm btn-info">
                            Details
                        </router-link> -->
                        <button 
                            @click="goToDetail(movie.id)"
                            class="btn btn-sm btn-info">
                            Details
                        </button>

                        <!-- <button 
                            @click="goToArtist(movie.id)"
                            class="btn btn-sm btn-primary mx-2">
                            Artists
                        </button> -->

                        <router-link
                            :to="{
                                name: 'movieArtists',
                                params: {id: movie.id}
                            }"
                            class="btn btn-sm btn-warning mx-1">
                            Artists
                        </router-link>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { ref, inject } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const movies = inject('movies')

    const goToDetail = (id) => {
        router.push(`/movie-test-app/movies/${id}`)
    }
    // const goToArtist = (id) => {
    //      router.push(
    //          {
    //             name: 'movieArtists',
    //             params: {id:id}
    //          }
    //      )
    // }
    
</script>

<style scoped>
    
</style>