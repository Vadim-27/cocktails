<script setup>
// import { ref } from "vue";
import AppLayout from "@/components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue";
import imgCocktail from "@/assets/img/cocktail.jpg";
import { useRootStore } from "../stores/root";
import { storeToRefs } from "pinia";

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore);

const getCocKtails = () => {
  rootStore.getCocktails(rootStore.ingredient);
};

const removeIngredient = () => {
  rootStore.setIngredient(null);
}
</script>

<template>
  <AppLayout :imgUrl="imgCocktail" :backFunc="removeIngredient" :isBackButtonVisible="!!ingredient">
    <div class="wrapper">
      <section v-if="!ingredient || !cocktails" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <div class="select-wrapper">
          <el-select
            v-model="rootStore.ingredient"
            class="select"
            placeholder="Choose main ingredient"
            filterable
            allow-create
            size="large"
            style="width: 240px"
            @change="getCocKtails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <p class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </p>
        <div class="img">
          <img
            src="../assets/img/1665865889_66-podacha-blud-com-p-shot-kokteil-krasivie-foto-71 2.png"
            alt="cocktails"
          />
        </div>
      </section>
      <section v-else class="info">
        <h1 class="title">COCKTAILS WITH {{ ingredient }}</h1>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'



.select-wrapper
  padding-top: 50px

.select
  width: 220px

.text
  min-width: 516px
  margin: 0 auto
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.img
  margin-top: 60px

.cocktails
  display: flex
  justify-content: center
  flex-wrap: wrap
  gap: 30px
  margin-top: 50px
  max-height: 600px
  overflow-y: auto
</style>
