
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
  