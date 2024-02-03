
<template>
    <div class="container-fluid">
        <nav 
            class="navbar navbar-expand-lg bg-info bg.gradient rounded-2 p-2">
            <div class="container-fluid">
                <router-link 
                    to="/movie-test-app/"
                    class="navbar-brand">Movie</router-link>
                <button 
                    class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div 
                    class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link 
                                to="/movie-test-app/about"
                                class="nav-link">About
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  
        <header class="border">
            <img 
            class=""
            src="/images/wonderWoman3.jpg" alt="">
        </header>

        <router-view></router-view>
    </div>


</template>
  
    <script setup>
        import { provide, ref } from 'vue'

        const movies = ref([
            {
                id: 1,
                title: 'Super Man',
                imageSrc: '/images/superman.jpg'
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

        provide('movies', movies)

    </script>
  
    <style scoped>
        header {
        height: 92vh;
        }
        header img {
        width: 100%;
        height: 100%;
        }
    
    </style>
  