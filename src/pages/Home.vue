<template>
    <header class="border">
        <img 
        class=""
        src="/images/cover.jpg" alt="">
    </header>
    <!-- <h3>Hello home page</h3> -->
    <div class="container">
        <h3 class="my-3">Top Movies</h3>
        <div class="row g-4">
            <template 
                v-for="movie in movies" :key="movie.id">
                <div
                    v-if="movie.isTop" 
                    class="col-md-3 my-3">
                    <div 
                        class="card card-body p-0 overflow-hidden">
                        <img
                            :src="`images/${movie.imageSrc}`" 
                            class="img-fluid rounded-2 py-1 w-100 object-fit-contain" 
                            style="height: 200px;"
                            alt="test7">
                        <div class="py-2 text-center">
                            <p class="fw-bold fs-4">
                                {{ movie.title }}
                            </p>
                            <router-link 
                                :to="`/movie-test-app/movies/${movie.id}/`"
                                class="btn btn-sm btn-info">
                                Details
                            </router-link>
                        </div>
                    </div>
                </div>
            </template>
            
        </div>
    </div>
</template>

<script setup>

    import { ref, inject } from 'vue';

    const movies = inject('movies')

</script>


<style scoped>
    header {
        height: 100vh;
        }
        header img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
</style>