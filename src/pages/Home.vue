<template>
    <!-- <h3>Hello home page</h3> -->
    <div class="container">
        <h3 class="my-3">Movies</h3>
        <div class="row g-4">
            <div 
                v-for="movie in movies" :key="movie.id"
                class="col-md-3 my-3">
                <div 
                    class="card card-body p-0 overflow-hidden">
                    <img
                        class="img-fluid rounded-2" 
                        :src="movie.imageSrc" alt="">
                    <div class="py-2">
                    <p class="text-center">{{ movie.title }}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';

    const movies = ref([
        {
            id: 1,
            title: 'Super Man',
            imageSrc: 'images/superman.jpg'
        },
        {
            id: 2,
            title: 'Spider Man',
            imageSrc: 'images/spiderman.jpg'
        },
        {
            id: 3,
            title: 'Fast and Furious 9',
            imageSrc: 'images/fastFurious.jpg'
        },
        {
            id: 4,
            title: 'Toy Story 4',
            imageSrc: 'images/toyStory.jpg'
        },
        {
            id: 5,
            title: 'Forza Gaming',
            imageSrc: 'images/forza.jpeg'
        },
        {
            id: 6,
            title: 'Wonder Woman',
            imageSrc: 'images/wonderWoman.jpg'
        },
        {
            id: 7,
            title: 'Mario',
            imageSrc: 'images/mario.jpg'
        },
        {
            id: 8,
            title: 'Secret Space',
            imageSrc: 'images/secret.jpg'
        },
    ])

</script>


<style lang="scss" scoped>

</style>