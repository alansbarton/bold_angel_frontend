<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <img src="assets/img/Monochrome on Transparent.png" alt="" class="center" />
      </div>
    </header>

    <router-view />

    <footer class="footer bg-black small text-center text-white-50">
      <div class="container">Copyright © Your Website 2020</div>
    </footer>
  </div>
</template>
