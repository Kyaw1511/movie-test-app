
<template>
    <div class="container-fluid">
        <nav 
            class="navbar navbar-expand-lg bg-info bg.gradient rounded-2 p-2">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Movie</a>
                <button 
                    class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div 
                    class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <router-view></router-view>
  
        <header class="border">
            <img 
            class=""
            src="/images/wonderWoman3.jpg" alt="">
        </header>

        
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
  