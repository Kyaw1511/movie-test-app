import { createRouter, createWebHistory } from 'vue-router'

// step 1
const Home = () => import('./../pages/Home.vue')
const About = () => import('./../pages/About.vue')
const Movies = () => import('./../pages/Movies.vue')
const Movie = () => import('./../pages/Movie.vue')
const MovieOverview = () => import('./../pages/MovieOverview.vue')
const MovieTrailer = () => import('./../pages/MovieTrailer.vue')
const MovieArtist = () => import('./../pages/MovieArtists.vue')

// step 2
const routes = [
  {
      path: '/movie-test-app/', 
      name: 'home',
      component: Home
  },
  {
      path: '/movie-test-app/about',
      name: 'about',
      component: About
  },
  {
      path: '/movie-test-app/movies',
      name: 'movies',
      component: Movies
  },
  {
      path: '/movie-test-app/movies/:id',
      name: 'movie',
      component: Movie,
      redirect: { name: "movieOverview"},
      children: [
          {
              path: 'overview',
              name:'movieOverview',
              component: MovieOverview,
          },
          {
              path: 'trailer',
              name: 'movieTrailer',
              component: MovieTrailer,
          },
          {
              path: 'artists',
              name: 'movieArtists',
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

export default router