import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Newsletter Signup | Ariyibi Baseet",
    },
  },
  {
    path: "/confirmation/:email",
    name: "confirmation",
    component: () => import("../views/ConfirmationPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
