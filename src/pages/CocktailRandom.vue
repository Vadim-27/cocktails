<script setup>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import AppLayout from "@/components/AppLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { COCKTAILS_RANDOM, INGREDIENT_PIC } from "../constants";

// const route = useRoute();
// const router = useRouter();
const cocktail = ref(null);

// const cocktailId = computed(() => route.path.split("/").pop());

const getCocktailRandom = async () => {
  const data = await axios.get(COCKTAILS_RANDOM);
  cocktail.value = data?.data?.drinks[0];
};



getCocktailRandom();

const ingredientsAndMeasures = computed(() => {
  if (!cocktail.value) return [];
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail.value[`strIngredient${i}`];
    const measure = cocktail.value[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push({
        id: i,
        strIngredient: ingredient,
        strMeasure: measure,
      });
    }
  }
  return ingredients;
});
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" >
      <div class="wrapper"></div>
      <section class="info">
        <h1 class="title">{{ cocktail.strDrink }}</h1>
        <div class="line"></div>
        <div class="slider">
          <swiper class="swiper" :slides-per-view="3" :space-between="50" >
            <swiper-slide
              v-for="ingredient in ingredientsAndMeasures"
              :key="ingredient.id"
              ><div class="wrapperIngr">
                
                  <img
                    :src="`${INGREDIENT_PIC}${ingredient.strIngredient}-Small.png`"
                    alt="ingredient"
                  />
                
                <p>{{ ingredient.strIngredient }}</p>
                <p>{{ ingredient.strMeasure }}</p>
              </div></swiper-slide
            >
          </swiper>
        </div>

        <p class="instructions">{{ cocktail.strInstructions }}</p>
      </section>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.slider
   margin-top: 50px
   margin-bottom: 80px

.swiper
   max-width: 586px

.wrapperIngr
  display: flex
  flex-direction: column
  gap: 20px
</style>
