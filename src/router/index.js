import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from "../constants/index";
import Home from '../pages/Home.vue'
import CocktailRandom from "../pages/CocktailRandom.vue";
import Cocktail from "../pages/Cocktail.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home,
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: Cocktail,
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom,
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});

export default router
