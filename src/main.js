import { createApp } from "vue";

import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";

// step 1
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Movies = () => import('./pages/Movies.vue')
const Movie = () => import('./pages/Movie.vue')
const MovieOverview =() => import('./pages/MovieOverview.vue')
const MovieTrailer =() => import('./pages/MovieTrailer.vue')
const MovieArtist =()=> import('./pages/MovieArtists.vue')

// step 2
const routes = [
    {
        path: '/movie-test-app/', 
        component: Home
    },
    {
        path: '/movie-test-app/about',
        component: About
    },
    {
        path: '/movie-test-app/movies/',
        component: Movies
    },
    {
        path: '/movie-test-app/movies/:id',
        component: Movie,
        children: [
            {
                path: '',
                component: MovieOverview,
            },
            {
                path: 'trailer',
                component: MovieTrailer,
            },
            {
                path: 'artists',
                component: MovieArtist,
            }
        ]
    },
]

// step 3
const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
// step 4
app.use(router)
app.mount('#app')
