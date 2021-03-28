<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Bold Angel Productions</a>
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
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                href="https://square.site/book/7TMT3H9TBMGR7/bold-angel-productions-pawcatuck-ct"
              >
                Book Now
              </a>
            </li>
            <li class="nav-item"><router-link class="nav-link js-scroll-trigger" to="/logout">Logout</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <img
          src="https://res.cloudinary.com/dnnf4debc/image/upload/v1616796989/Monochrome_on_Transparent_tsstbb.png"
          alt=""
          class="center"
        />
      </div>
    </header>
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
      <form id="editProfile" v-on:submit.prevent="updateUser()">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="user.email" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPhoneNumber">phone number</label>
            <input type="text" class="form-control" id="FormControlPhoneNumber" v-model="user.phone_number" />
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Input Profile Pic</label>
          <br />
          <input class="form-group" type="file" v-on:change="setFile($event)" ref="fileInput" />
        </div>
        <div class="form-group">
          <label for="formControl1">About Me</label>
          <br />
          <textarea class="form-control" id="aboutMe" rows="6" v-model="user.about_me"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div class="container">
        <!-- carocel -->
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid" v-bind:src="user.profile_pic" alt="" />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>About Me</h4>
              <p class="text-black-50 mb-0">
                {{ user.about_me }}
              </p>
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
                  <p class="mb-0 text-white-50">
                    Go ahead and break the mold
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
                  <p class="mb-0 text-white-50">
                    I'm gonna be bold
                  </p>
                  <hr class="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card-deck">
          <div class="col-sm-6" style="width: 18rem;" v-for="photoOne in photo_ones">
            <img class="card-img-top" v-bind:src="photoOne.image" alt="Card image cap" />
            <div class="card-body">
              <div class="form-group">
                <button v-on:click="showPhoto(photoOne)" class="btn btn-primary">Edit</button>
              </div>
            </div>

            <dialog :id="`photo-details-${photoOne.id}`">
              <form method="dialog" @submit="e => handleSubmit(e, photoOne.id)">
                <h1>Product info</h1>
                <img class="card-img-top" v-bind:src="photoOne.image" alt="Card image cap" />
                <label for="exampleFormControlSelect1">Select Carousel</label>
                <select class="form-control" id="FormControlSelect1" v-model="photoOne.carousel">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <button v-on:click="updatePhoto(photoOne)">update</button>
                <button v-on:click="destroyPhoto(photoOne)">delete</button>
                <button value="cancel">close</button>
              </form>
            </dialog>
          </div>
        </div>

        <!-- Create New Photo -->
        <div>
          <form id="createPhoto" v-on:submit.prevent="createPhoto()">
            <h2>Create new Photo</h2>
            <h5>Select Photo</h5>
            <input class="form-group" type="file" v-on:change="setFile2($event)" ref="fileInput" />
            <h5>Select Carousel</h5>
            <select class="form-control" id="FormControlSelect1" v-model="newPhotoOnecarousel">
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
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
                <div class="small text-black-50">
                  43 West Broad St,
                  <br />
                  Pawcatuck CT 06379
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  <a href="#!">{{ user.email }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  {{ user.phone_number }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="https://www.facebook.com/KeeleyPhotography%20/"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="https://www.instagram.com/keeleyphotography_/"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>

    <footer class="footer bg-black small text-center text-white-50">
      <!-- <div class="container">Copyright © Your Website 2020</div> -->
    </footer>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: [],
      phone_number: "",
      photo_ones: [],
      carousel1: [],
      carousel2: [],
      users: {},
      currentPhotoOne: {},
      newPhotoOneImage: "",
      newPhotoOnecarousel: "",
    };
  },
  mounted() {
    this.indexUsers();
    this.indexPhotos();
    this.showUser();
    document.addEventListener("scroll", this.navbarCollapse);
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

    showUser: function() {
      axios.get("api/users/" + this.$route.params.id).then(response => {
        console.log("user show", response);
        this.user = response.data;
      });
    },

    showPhoto: function(photoOne) {
      axios.get("api/photo_ones/" + photoOne.id).then(response => {
        console.log("photo_one show", response);
        // this.photo_one = response.data;
        document.querySelector(`#photo-details-${photoOne.id}`).showModal();
      });
    },

    updateUser: function(user) {
      var formData = new FormData();
      formData.append("profile_pic", this.user.profile_pic);
      formData.append("phone_number", this.user.phone_number);
      formData.append("about_me", this.user.about_me);
      formData.append("email", this.user.email);
      axios
        .patch("/api/users/" + this.user.id, formData)
        .then(response => {
          console.log("users update", response);
          this.currentUser = {};
        })
        .catch(error => {
          console.log("users update error", error.response);
        });
    },

    updatePhoto: function(photoOne) {
      console.log("update photo", photoOne);
      var params = {
        image: photoOne.image,
        carousel: photoOne.carousel,
      };
      axios
        .patch("/api/photo_ones/" + photoOne.id, params)
        .then(response => {
          console.log("photo_ones update", response);
          this.photoOne = {};
        })
        .catch(error => {
          console.log("photo_ones update error", error.response);
        });
    },

    createPhoto: function() {
      var formData = new FormData();
      formData.append("image", this.newPhotoOneImage);
      formData.append("carousel", this.newPhotoOneCarousel);
      axios
        .post("/api/photo_ones", formData)
        .then(response => {
          console.log("photo_ones create", response);
          this.newPhotoOneImage = "";
          this.newPhotoOnecarousel = "";
        })
        .catch(error => {
          console.log("photo ones create error", error.response);
        });
    },

    destroyPhoto: function(photoOne) {
      axios.delete("/api/photo_ones/" + photoOne.id).then(response => {
        console.log("success", response.data);
        var index = this.photo_ones.indexOf(photoOne);
        this.photo_ones.splice(index, 1);
      });
    },

    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.user.profile_pic = event.target.files[0];
      }
    },

    setFile2: function(event) {
      if (event.target.files.length > 0) {
        this.newPhotoOneImage = event.target.files[0];
      }
    },

    goToSquare() {
      window.open("https://square.site/book/7TMT3H9TBMGR7/bold-angel-productions-pawcatuck-ct");
    },

    navbarCollapse() {
      const mainNav = document.getElementById("mainNav");
      if (window.scrollY > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    },

    handleSubmit(e, id) {
      console.log(e, id);
      e.preventDefault();
      document.querySelector(`#photo-details-${id}`).close();
    },
  },
};
</script>
