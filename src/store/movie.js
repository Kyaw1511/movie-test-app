import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore('movie', () => {

    const movies = ref ([
        {
            id: 1,
            title: 'Super Man',
            category: `Action`,
            imageSrc: '../images/10.jpg',
            isTop: true,
            stars: 3,
        },    
        {
            id: 2,
            title: 'Spider Man',
            category: `Action`,
            imageSrc: '../images/9.jpg',
            isTop: true,
            stars: 5,
        },
        {
            id: 3,
            title: 'Fast and Furious 9',
            category: `Action`,
            imageSrc: '../images/3.jpg',
            isTop: true,
            stars: 3,
        },
        {
            id: 4,
            title: 'Toy Story 4',
            category: `Cartoon`,
            imageSrc: '../images/11.jpg',
            isTop: true,
            stars: 4,
        },
        {
            id: 5,
            title: 'Forza Gaming',
            category: `Racing`,
            imageSrc: '../images/4.jpeg',
            isTop: false,
            stars: 2,
        },
        {
            id: 6,
            title: 'Wonder Woman',
            category: `Action`,
            imageSrc: '../images/12.jpg',
            isTop: false,
            stars: 5,
        },
        {
            id: 7,
            title: 'Mario',
            category: `Cartoon`,
            imageSrc: '../images/7.jpg',
            isTop: false,
            stars: 3,
        },
        {
            id: 8,
            title: 'Secret Space',
            category: `Action`,
            imageSrc: '../images/8.jpg',
            isTop: false,
            stars: 2,
        },
        {
            id: 9,
            title: 'Wonder Woman',
            category: `Action`,
            imageSrc: '../images/13.jpg',
            isTop: false,
            stars: 5,
        },
        {
            id: 10,
            title: 'DC movie',
            category: `Action`,
            imageSrc: '../images/14.jpg',
            isTop: false,
            stars: 2,
        },
        {
            id: 11,
            title: 'DC Hero',
            category: `Action`,
            imageSrc: '../images/16.jpg',
            isTop: false,
            stars: 2,
        },
        {
            id: 12,
            title: 'KunFu Panda',
            category: `Cartoon`,
            imageSrc: '../images/15.jpg',
            isTop: false,
            stars: 3,
        },
    ])
    
    return { movies }
})
