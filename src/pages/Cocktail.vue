<script setup>
import axios from "axios";
import AppLayout from "@/components/AppLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import { COCKTAILS_BY_ID } from "../constants";

const route = useRoute();

const cocktail = ref(null);

const cocktailId = computed(() => route.path.split("/").pop())

const getCocktailById = async () => {
    const data = await axios.get(`${COCKTAILS_BY_ID}${cocktailId.value}`);
    cocktail.value = data?.data?.drinks[0];
}


getCocktailById();

const ingredientsAndMeasures = computed(() => {
  if (!cocktail.value) return [];
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail.value[`strIngredient${i}`];
    const measure = cocktail.value[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push({ id: i, strIngredient: ingredient, strMeasure: measure });
    }
  }
  return ingredients;
});

</script>

<template>
    <div v-if="cocktail" class="wrap">
    <AppLayout  :imgUrl="cocktail.strDrinkThumb" >
    <div class="wrapper"></div>
    <section class="info">
      <h1 class="title">{{ cocktail.strDrink }}</h1>
      <div class="line"></div>
      <ul class="list">
        <li class="list-item" v-for="ingredient in ingredientsAndMeasures" :key="ingredient.id">
            {{ ingredient.strIngredient }}
            <template v-if="ingredient.strMeasure"> | {{ ingredient.strMeasure }}</template>
          </li>
      </ul>
      <p class="instructions">{{ cocktail.strInstructions }}</p>
    </section>
    </AppLayout>
    </div>
</template>



<style lang="sass" scoped>
@import '../assets/styles/main.sass'
</style>