
<template>
    <div class="container-fluid">
        <nav 
            id="navbar"
            class="navbar navbar-expand-lg bg-transparent position-fixed w-100 rounded-2 px-5">
            <div class="container-fluid">
                <router-link 
                    to="/movie-test-app/"
                    class="navbar-brand text-info text-uppercase fw-bolder fs-2">
                    Vueflix
                </router-link>
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
                                class="nav-link text-info text-uppercase fw-bolder fs-4 px-4">
                                About
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>


</template>
  
    <script setup>
        import { provide, ref } from 'vue'

        const movies = ref([
            {
                id: 1,
                title: 'Super Man',
                imageSrc: "../public/images/10.jpg"
            },    
            {
                id: 2,
                title: 'Spider Man',
                imageSrc: '../public/images/9.jpg'
            },
            {
                id: 3,
                title: 'Fast and Furious 9',
                imageSrc: '../public/images/3.jpg'
            },
            {
                id: 4,
                title: 'Toy Story 4',
                imageSrc: '../public/images/11.jpg'
            },
            {
                id: 5,
                title: 'Forza Gaming',
                imageSrc: '../public/images/4.jpeg'
            },
            {
                id: 6,
                title: 'Wonder Woman',
                imageSrc: '../public/images/12.jpg'
            },
            {
                id: 7,
                title: 'Mario',
                imageSrc: '../public/images/7.jpg'
            },
            {
                id: 8,
                title: 'Secret Space',
                imageSrc: '../public/images/8.jpg'
            },
            {
                id: 9,
                title: 'Wonder Woman',
                imageSrc: '../public/images/13.jpg'
            },
            {
                id: 10,
                title: 'DC movie',
                imageSrc: '../public/images/14.jpg'
            },
            {
                id: 11,
                title: 'DC Hero',
                imageSrc: '../public/images/16.jpg'
            },
            {
                id: 12,
                title: 'KunFu Panda',
                imageSrc: '../public/images/15.jpg'
            },
        ])

        provide('movies', movies)

    </script>
  
    <style scoped>
        #navbar {
            border: 2px solid whitesmoke;
            z-index: 1;
            
        }
        header {
        height: 100vh;
        }
        header img {
        width: 100%;
        height: 100%;
        }
    
    </style>
  