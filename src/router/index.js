import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: () => import("@/views/RestaurantsView.vue"),
  },
  {
    path: "/restaurant/:id",
    name: "restaurant-details",
    component: () => import("@/views/RestaurantDetailsView.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
