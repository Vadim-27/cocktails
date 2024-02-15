<script setup>
import imgCocktail from "@/assets/img/cocktail.jpg";

import AppLayout from "@/components/AppLayout.vue";
</script>

<template>
  
    <AppLayout :imgUrl="imgCocktail">
      <div class="wrapper"></div>
      <section class="info">
        <h1 class="title">NOT FOUND PAGE</h1>
        <div class="line"></div>
      </section>
    </AppLayout>
  
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
