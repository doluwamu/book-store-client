import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookEdit from "@/views/EditBookView.vue";
import ExploreBooks from "@/views/ExploreBooksView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/explore",
    name: "explore",
    component: ExploreBooks,
  },
  {
    path: "/add-book",
    name: "createBook",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "create-book" */ "../views/CreateBookView.vue"
      ),
  },
  {
    path: "/book/:id",
    name: "bookDetails",
    component: () => import("../views/BookDetailsView.vue"),
  },
  {
    path: "/book/:id/edit",
    name: "bookEdit",
    component: BookEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
