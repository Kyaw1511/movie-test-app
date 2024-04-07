<template>
    <div
        class="container pt-5"
        style="min-height: 86vh;">
        <div>
            <h5
                class="mt-5 mb-3">
                All Movies
            </h5>
            <div class="d-flex justify-content-between mb-4">
                <select 
                    v-model="category"
                    @change="filteredByCategory"
                    class="form-control border border-primary w-25"
                    name="" id="">
                    <option value="all">All</option>
                    <option value="Action">Action</option>
                    <option value="Cartoon">Cartoon</option>
                    <option value="Racing">Racing</option>
                </select>
                <input type="text"
                    v-model="searchInput"
                    @input="filteredByName"
                    class="form-control border border-primary w-25"
                    placeholder="search items">
            </div>

        </div>
        <div class="row g-4">
            <div 
                v-for="movie in movieList" :key="movie.id"
                class="col-md-3 my-3">

                <div 
                    class="card card-body bg-success p-0 overflow-hidden">
                    <img
                        :src="`images/${movie.imageSrc}`" 
                        class="img-fluid rounded-lg p-2 w-100 object-fit-contain" 
                        style="height: 200px; border-radius: 25px;"
                        alt="test7">
                    <div class="my-1">
                        <h3 class="fw-bold fs-4 text-center">
                            {{ movie.title.toUpperCase() }}
                        </h3>
                        <p class="mx-2 text-start fw-light">
                            {{ movie.category.toUpperCase() }}
                        </p>
                        
                        <div class="d-flex justify-content-between">
                            <div 
                                class="d-flex mx-2 text-start">
                                <!-- full star -->
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
                            
                        </div>
                        <div class="my-2">
                            <router-link 
                                :to="`/movie-test-app/movies/${movie.id}/`"
                                class="btn btn-sm btn-danger rounded-pill">
                                Details
                            </router-link>
                            <router-link
                                :to="{
                                    name: 'movieArtists',
                                    params: {id: movie.id}
                                }"
                                class="btn btn-sm btn-warning rounded-pill mx-2">
                                Artists
                            </router-link>

                                <!-- <button 
                                    @click="goToDetail(movie.id)"
                                    class="btn btn-sm btn-info">
                                    Details
                                </button> -->
                        </div>

                    </div>
                </div>
                        
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    
    import { useMovieStore } from './../store/movie';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';

    const movieStore = useMovieStore()
    const {movies} = storeToRefs(movieStore)

    const movieList = ref(movies.value)
    // filter by Category
    const category = ref('all')
    const filteredByCategory = () => {
        if(category.value === 'all') {
            movieList.value = movies.value

        } else {
            movieList.value = movies.value.filter((movie) => {
                return movie.category === category.value
            })
        }
    }

    // filtered by Name
    const searchInput = ref('')
    const filteredByName = () => {
        movieList.value = movies.value.filter((movie) => {
            return movie.title.toLowerCase().includes(searchInput.value.toLowerCase())
        })

        // console.log(searchInput.value)
        // console.log('test')
    }

    // go to detail
    const router = useRouter()
    const goToDetail = (id) => {
        router.push(`/movie-test-app/movies/${id}`)
    }
    
</script>

<style scoped>
    
</style>