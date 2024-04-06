<template>
    <header class="border">
        <img 
            class=""
            src="/images/cover.jpg" alt="">
    </header>
    <!-- <h3>Hello home page</h3> -->
    <div class="container">
        <h3 class="topMovies">Top Movies</h3>
        <div class="row g-4">
            <template 
                v-for="movie in movies" :key="movie.id">
                <div
                    v-if="movie.isTop" 
                    class="col-md-3 my-3">
                    <div 
                        class="card card-body bg-success p-0 overflow-hidden">
                        <img
                            :src="`images/${movie.imageSrc}`" 
                            class="img-fluid rounded-2 p-2 w-100 object-fit-contain" 
                            style="height: 200px;"
                            alt="test7">
                        <div class="text-center">
                            <h3 class="fw-bold fs-4">
                                {{ movie.title.toUpperCase() }}
                            </h3>
                            <p class="mx-2 text-start fw-light">
                                {{ movie.category.toUpperCase() }}
                            </p>
                            <div class="d-flex justify-content-between p-1">
                                <div 
                                    class="d-flex mx-2 text-start">
                                    <svg
                                        v-for="num in movie.stars" 
                                        key="num"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1 text-warning" viewBox="0 0 16 16">
                                        <path 
                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <!-- half star -->
                                    <svg 
                                        v-for="num in (5 - movie.stars)"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-1 text-warning" viewBox="0 0 16 16">
                                        <path  
                                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                    </svg>

                                </div>
                                
                                <router-link 
                                    :to="`/movie-test-app/movies/${movie.id}/`"
                                    class="btn btn-sm btn-danger rounded-pill">
                                    Details
                                </router-link>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </template>
            
        </div>
    </div>
</template>

<script setup>
    import { useMovieStore } from './../store/movie';
    import { storeToRefs } from 'pinia';

    const movieStore = useMovieStore()
    const {movies} = storeToRefs(movieStore)

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
    
    .topMovies{
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.5px;
        margin: 20px 0px;
    }
</style>