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
                        alt="">
                    <!-- <img 
                        :src="`../images/${movie.imageSrc}`" alt="">     -->
                    <div class="py-2 text-center">
                        <p class="">
                            {{ movie.title }}
                        </p>
                        <router-link 
                            :to="`/movie-test-app/movies/${movie.id}`"
                            class="btn btn-sm btn-info">
                            Details
                        </router-link>

                        <router-link
                            :to="{name: 'movieArtists', params: {id: movie.id} }"
                            class="btn btn-sm btn-warning mx-1">
                            Artists
                        </router-link>

                        <router-link
                            :to="`/movie-test-app/movies/${movie.id}/movieOverview`"
                            class="btn btn-sm btn-warning mx-1">
                            test
                        </router-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { ref, inject } from 'vue';

    const movies = inject('movies')
</script>

<style scoped>

</style>