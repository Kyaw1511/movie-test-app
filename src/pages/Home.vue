<template>
    <!-- <h3>Hello home page</h3> -->
    <div class="container">
        <h3 class="my-3">Top Movies</h3>
        <div class="row g-4">
            <div 
                v-for="movie in movies" :key="movie.id"
                class="col-md-3 my-3">
                <div 
                    class="card card-body p-0 overflow-hidden">
                    <img
                        class="img-fluid rounded-2" 
                        :src="movie.imageSrc" alt="">
                    <div class="py-2 text-center">
                        <p class="">
                            {{ movie.title }}
                        </p>
                        <router-link 
                            :to="`/movie-test-app/movies/${movie.id}`"
                            class="btn btn-sm btn-info">
                            Details
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


<style lang="scss" scoped>

</style>