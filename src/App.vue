

<template>
  <div class="container-fluid">
    <nav 
      class="navbar navbar-expand-lg bg-info bg.gradient rounded-2 p-2">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Movie</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>


    <header class="border">
      <img 
        class=""
        src="../public/images/harryPotter.jpg" alt="">
    </header>
    <div class="container">
      <h3 class="my-3">Movies</h3>
      <div class="row g-4">
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/superman.jpg" alt="">
            <div class="py-2">
              <p>Movie 1</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/spiderman.jpg" alt="">
            <div class="py-2">
              <p>Movie 2</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/fastFurious.jpg" alt="">
            <div class="py-2">
              <p>Movie 3</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/toyStory.jpg" alt="">
            <div class="py-2">
              <p>Movie 4</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/forza.jpeg" alt="">
            <div class="py-2">
              <p>Movie 5</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/wonderWoman.jpg" alt="">
            <div class="py-2">
              <p>Movie 6</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/mario.jpg" alt="">
            <div class="py-2">
              <p>Movie 7</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 my-3">
          <div class="card card-body p-0 overflow-hidden">
            <img
              class="img-fluid rounded-2" 
            src="../public/images/secret.jpg" alt="">
            <div class="">
              <p>Movie 8</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
