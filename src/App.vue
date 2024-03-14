
<template>
    <div class="container-fluid">
        <nav 
            id="navbar"
            class="navbar navbar-expand-lg bg-transparent position-fixed w-100 rounded-2 px-5">
            <div class="container-fluid">
                <router-link 
                    :to="{name: 'home'}"
                    class="navbar-brand text-info text-uppercase fw-bolder fs-2">
                    Vueflix
                </router-link>
                <button 
                    class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon navbar-toggler-white"></span>
                </button>
                <div 
                    class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link    
                                :to="{name: 'movies'}"
                                class="nav-link text-info text-uppercase fw-bolder fs-4 px-4">
                                Movies
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link 
                                :to="{name: 'about'}"
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
                imageSrc: "../public/images/10.jpg",
                isTop: true,
            },    
            {
                id: 2,
                title: 'Spider Man',
                imageSrc: '../public/images/9.jpg',
                isTop: true,
            },
            {
                id: 3,
                title: 'Fast and Furious 9',
                imageSrc: '../public/images/3.jpg',
                isTop: true,
            },
            {
                id: 4,
                title: 'Toy Story 4',
                imageSrc: '../public/images/11.jpg',
                isTop: true,
            },
            {
                id: 5,
                title: 'Forza Gaming',
                imageSrc: '../public/images/4.jpeg',
                isTop: false,
            },
            {
                id: 6,
                title: 'Wonder Woman',
                imageSrc: '../public/images/12.jpg',
                isTop: false,
            },
            {
                id: 7,
                title: 'Mario',
                imageSrc: '../public/images/7.jpg',
                isTop: false,
            },
            {
                id: 8,
                title: 'Secret Space',
                imageSrc: '../public/images/8.jpg',
                isTop: false,
            },
            {
                id: 9,
                title: 'Wonder Woman',
                imageSrc: '../public/images/13.jpg',
                isTop: false,
            },
            {
                id: 10,
                title: 'DC movie',
                imageSrc: '../public/images/14.jpg',
                isTop: false,
            },
            {
                id: 11,
                title: 'DC Hero',
                imageSrc: '../public/images/16.jpg',
                isTop: false,
            },
            {
                id: 12,
                title: 'KunFu Panda',
                imageSrc: '../public/images/15.jpg',
                isTop: false,
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
  