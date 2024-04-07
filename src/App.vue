
<template>
    <main>
        <div class="container-fluid">
            <nav 
                id="navbar"
                class="navbar navbar-expand-lg position-fixed w-100 rounded-2"
                :class="navBgColor">
                <div class="container-fluid">
                    <router-link 
                        :to="{name: 'home'}"
                        class="navbar-brand text-info text-uppercase fw-bold fs-4">
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
                                    class="nav-link text-info text-uppercase fw-bold fs-4 px-4">
                                    Movies
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link 
                                    :to="{name: 'about'}"
                                    class="nav-link text-info text-uppercase fw-bold fs-4 px-4">
                                    About
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <router-view></router-view>

            <footer
                class="p-2">
                <p
                    class="text-center text-primary">
                    &copy; All right reserved by KMT
                </p>
            </footer>

        </div>

    </main>

</template>
  
    <script setup>
        import { ref, provide, computed } from 'vue'

        const scrollY = ref(0)
        window.addEventListener('scroll', ()=>{
            scrollY.value = window.scrollY

            // console.log(scrollY.value)
        });

        const navBgColor = computed(() => {
            return scrollY.value > 55 ? 'bg-dark' : 'bg-transparent';
        
        })

    </script>
  
    <style scoped>
        
        nav {
            /* border: 2px solid whitesmoke; */
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
  