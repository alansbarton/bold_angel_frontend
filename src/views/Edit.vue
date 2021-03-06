<template>
  <div class="home">
    <!-- About-->
    <section class="about-section text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">Why the name Bold Angel Productions?</h2>
            <p class="text-white-50">
              I have always been fascinated with the idea of how Angels can be betrayed. Whether they are shown as the
              light in someone's life, surrounded by positivity, or they are dark, tattered, and torn almost to a gothic
              representation. It got me thinking, what if we all have both angels in us? Or what if either of those
              angels if exactly how we want to be seen? People have their own way of representing who they are and could
              enjoy the dark side over the light. Or you could be waiting for that light to come through the dark,
              waiting for that moment to help you pull through to find the light. I want to showcase whatever side you
              believe represents who you are. Perhaps you want to try something to bring out the other angel in you.
              Whether you see the light, or enjoy the darkness, we all have that one thing that makes us Bold. Being
              Bold, can mean whatever you want it to mean, I want it to be my job to show it off. In the words of Jen
              Ledger, repeat this to yourself everyday, “I’m Gonna Be Bold.”
              <br />
              <br />
              <br />
              <button type="button" class="btn btn-light" v-on:click="goToSquare()">
                Book Now
              </button>
            </p>
          </div>
        </div>
        <!-- <img class="img-fluid" src="assets/img/ipad.png" alt="" /> -->
      </div>
    </section>
    <!-- Projects-->
    <section class="projects-section bg-light" id="projects">
      <div class="container">
        <!-- carocel -->
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <form>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" v-on:change="setFile($event)" ref="fileInput" />
              </div>
            </form>
            <img
              v-if="users && users[0] && users[0].profile_pic"
              class="img-fluid"
              v-bind:src="users[0].profile_pic"
              alt=""
            />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <form id="editProfile" v-on:submit.prevent="updateUser()">
                <div class="form-group" v-if="users && users[0] && users[0].about_me">
                  <label for="formControl1">About Me</label>
                  <textarea class="about_me" id="aboutMe" rows="3" v-model="users[0].about_me"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <!-- Project One Row-->
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div id="bg-size" class="carousel-inner">
                <div class="carousel-item" v-for="(photo_one, idx) in carousel1" :class="{ active: idx == 0 }">
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
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">Shoreline</h4>
                  <p class="mb-0 text-white-50">
                    Grayscale is open source and MIT licensed. This means you can use it for any project - even
                    commercial projects! Download it, customize it, and publish your website!
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
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div id="bg-size" class="carousel-inner">
                <div class="carousel-item" v-for="(photo_one, idx) in carousel2" :class="{ active: idx == 0 }">
                  <img v-bind:src="photo_one.image" class="d-block w-100 h-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade1" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade1" role="button" data-bs-slide="next">
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
            <h2 class="text-white mb-5">Book now for your next photo shoot!</h2>
            <button class="btn btn-primary mx-auto" v-on:click="goToSquare()">
              Book Now
            </button>
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
                <form id="editProfile">
                  <div v-if="users && users[0] && users[0].email" class="small text-black-50">
                    <div class="form-group">
                      <input type="text" class="email" id="FormControlPhoneNumber" v-model="users[0].email" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4" />
                <form id="editProfile">
                  <div v-if="users && users[0] && users[0].phone_number" class="small text-black-50">
                    <div class="form-group">
                      <input
                        type="text"
                        class="phone_number"
                        id="FormControlPhoneNumber"
                        v-model="users[0].phone_number"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="#!"><i class="fab fa-tiktok"></i></a>
          <a class="mx-2" href="https://www.facebook.com/KeeleyPhotography%20/"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="https://www.instagram.com/keeleyphotography_/"><i class="fab fa-instagram"></i></a>
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
      carousel1: [],
      carousel2: [],
      users: {},
      currentUser: [],
    };
  },
  mounted() {
    this.indexUsers();
    this.indexPhotos();
  },
  methods: {
    indexPhotos: function() {
      axios.get("api/photo_ones").then(response => {
        console.log("photos index", response);
        this.photo_ones = response.data;
        let carousel1 = [];
        let carousel2 = [];
        this.photo_ones.forEach(function(photo) {
          if (photo.carousel === 1) {
            carousel1.push(photo);
          } else {
            carousel2.push(photo);
          }
        });
        this.carousel1 = carousel1;
        this.carousel2 = carousel2;
      });
    },
    indexUsers: function() {
      axios.get("api/users").then(response => {
        console.log("user index", response);
        this.users = response.data;
        console.log(this.users);
      });
    },
    goToSquare() {
      window.open("https://square.site/book/7TMT3H9TBMGR7/bold-angel-productions-pawcatuck-ct");
    },
    updateUser: function(user) {
      var params = {
        phone_number: user.phone_number,
        about_me: user.about_me,
        profile_pic: user.profile_pic,
        email: user.email,
      };
      axios
        .patch("/api/users/" + user.id, params)
        .then(response => {
          console.log("users update", response);
          this.currentUser = {};
        })
        .catch(error => {
          console.log("users update error", error.response);
        });
    },
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
  },
};
</script>
