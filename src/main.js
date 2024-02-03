import { createApp } from "vue";

import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router";

// step 1
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')

// step 2
const routes = [
    {
        path: '/movie-test-app', 
        component: Home
    },
    {
        path: '/movie-test-app/about',
        component: About
    }
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
