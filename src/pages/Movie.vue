<template>
    <div 
        class="container-fluid my-3 py-3" id="moviePage">
        <div class="row" :key="movie.id">
            <div class="col-md-6">
                <img 
                    :src="movie.imageSrc" alt="">
            </div>
            <div class="col-md-6 my-auto ">
                <h4>{{ movie.title }}</h4>
                <p class="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aliquid dolores aut nisi odit, sapiente, maiores excepturi ipsam animi perferendis est. Quasi ipsam fugit reiciendis voluptate mollitia illum nesciunt totam veniam at consequuntur rem voluptatum beatae cupiditate, vero, pariatur quis corrupti suscipit laboriosam similique repellat. Rem, hic. Totam soluta impedit obcaecati rerum reprehenderit, doloremque et voluptatem fugiat magni repellendus molestias quae suscipit reiciendis doloribus magnam vel culpa non illo quas labore. Rem fuga corporis dolorum suscipit recusandae.
                </p>
                <p class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim repellat doloremque laboriosam neque velit cupiditate quos porro blanditiis vero, obcaecati dolorum atque dicta quam dolores facere eaque! Tempore, commodi facere sed vitae praesentium quam libero excepturi nemo? Reiciendis fugiat veniam maxime error dolorem voluptates libero, suscipit ducimus! Officiis velit facere vero cupiditate aut explicabo eveniet minima delectus!
                </p>    
            </div>
        </div>
    </div>
</template>  

<script setup>
    import { useRoute } from 'vue-router'
    import { ref, inject, computed } from 'vue';

    const route = useRoute()

    const movieId = parseInt(route.params.id)
    const movies = inject('movies')

    const movie = computed(() => {
        return movies.value.find((movie) => {
            return movie.id === movieId
        })
    })

</script>

<style scoped>
    #moviePage img{
        /* border: 2px solid green; */
        width: 100%;
    }
    #moviePage p {
        text-indent: 50px;
        text-align: justify;
    }
</style>