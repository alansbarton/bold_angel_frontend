<template>
  <div class="home">
    <!-- About-->
    <section class="about-section text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">Built with Bootstrap 4</h2>
            <p class="text-white-50">
              Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download
              the template on
              <a href="https://startbootstrap.com/theme/grayscale/">the preview page</a>
              . The theme is open source, and you can use it for any purpose, personal or commercial.
            </p>
          </div>
        </div>
        <img class="img-fluid" src="assets/img/ipad.png" alt="" />
      </div>
    </section>
    <!-- Projects-->
    <section class="projects-section bg-light" id="projects">
      <div class="container">
        <!-- carocel -->
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div id="bg-size" class="carousel-inner">
                <div
                  class="carousel-item"
                  v-if="photo_one.carousel == 1"
                  v-for="(photo_one, idx) in photo_ones"
                  :class="{ active: idx == 0 }"
                >
                  <img v-bind:src="photo_one.image" class="d-block w-100 h-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>Shoreline</h4>
              <p class="text-black-50 mb-0">
                Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial
                projects! Download it, customize it, and publish your website!
              </p>
            </div>
          </div>
        </div>
        <!-- Project One Row-->
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6"><img class="img-fluid" src="assets/img/bg_1.JPG" alt="" /></div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">About Me</h4>
                  <p class="mb-0 text-white-50">
                    An example of where you can put an image of a project, or anything else, along with a description.
                  </p>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project Two Row-->
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-6">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div id="bg-size" class="carousel-inner">
                <div
                  class="carousel-item"
                  v-if="photo_one.carousel == 1"
                  v-for="(photo_one, idx) in photo_ones"
                  :class="{ active: idx == 0 }"
                >
                  <img v-bind:src="photo_one.image" class="d-block w-100 h-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                  <h4 class="text-white">Mountains</h4>
                  <p class="mb-0 text-white-50">
                    Another example of a project with its respective description. These sections work well responsively
                    as well, try this theme on a small screen!
                  </p>
                  <hr class="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Signup-->
    <section class="signup-section" id="signup">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
            <form class="form-inline d-flex">
              <input
                class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                type="email"
                placeholder="Enter email address..."
              />
              <button class="btn btn-primary mx-auto" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-->
    <section class="contact-section bg-black">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4" />
                <div class="small text-black-50">4923 Market Street, Orlando FL</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4" />
                <div class="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4" />
                <div class="small text-black-50">+1 (555) 902-8832</div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      photo_ones: [],
    };
  },
  created: function() {
    this.indexPhotos();
  },
  methods: {
    indexPhotos: function() {
      axios.get("api/photo_ones").then(response => {
        console.log("photos index", response);
        this.photo_ones = response.data;
      });
    },
  },
};
</script>
