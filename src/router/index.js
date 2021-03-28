import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Edit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },

  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/users/:id/edit", name: "edit", component: Edit },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
