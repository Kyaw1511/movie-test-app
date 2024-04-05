<template>
    <div 
        class="container-fluid" id="moviePage">
        <div class="row" >
            <div
                class="col-md-6 firstRow">
                <img 
                    :src="`../${movie.imageSrc}`" alt="test6">
                
            </div>
            <div class="col-md-6 secondRow">
                <div
                    class="d-flex justify-content-between">
                    <h4 class="fs-2 text-center fw-bold">
                        {{ movie.title.toUpperCase() }}
                    </h4>

                    <button
                        @click="goBack"
                        class="btn btn-sm rounded btn-info">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
                            class="bi bi-skip-backward-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445"/>
                        </svg>

                    </button>
                    <!-- <button
                        @click="goBack"
                        class="btn btn-primary">
                        Back
                    </button> -->

                </div>
                
                <div 
                    class="d-flex mx-2 text-start">
                    <!-- full star -->
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1 text-warning" viewBox="0 0 16 16">
                        <path 
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1 text-warning" viewBox="0 0 16 16">
                        <path 
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1 text-warning" viewBox="0 0 16 16">
                        <path 
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <!-- half star -->
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half me-1 text-warning" viewBox="0 0 16 16">
                        <path 
                            d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
                    </svg>
                    <!-- empty star -->
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-1 text-warning" viewBox="0 0 16 16">
                        <path  
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                    </svg>

                </div>

                <div
                    class="text-center">
                    <router-link
                        :to="{
                            name: 'movieOverview', 
                            params: {id: movie.id}
                            }"
                        class="btn btn-lg btn-outline-success m-2 rounded fs-4">
                        OVERVIEW
                    </router-link>
                    <router-link
                        :to="{
                            name: 'movieTrailer', 
                            params: {id: movie.id} 
                            }"
                        class="btn btn-lg btn-outline-success m-2 rounded fs-4">
                        TRAILER
                    </router-link>
                    <router-link
                        :to="{
                            name: 'movieArtists', 
                            params: {id: movie.id} 
                            }"
                        class="btn btn-lg btn-outline-success m-2 rounded fs-4">
                        ARTISTS
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