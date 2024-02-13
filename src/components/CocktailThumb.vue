<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="root">
        <RouterLink :to="`/cocktail/${cocktail.idDrink}`">
        <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
        <p class="name">{{ cocktail.strDrink }}</p>
        </RouterLink>
    </div>
  
</template>

<style lang="sass" scoped>
@import '../assets/styles/main.sass'
.root
    width: 150px
.pic
    width: 150px
    height: 150px
    background-repeat: no-repeat
    background-position: 50% 50%
    margin: 0 auto
    background-size: contain

.name
    margin-top: 15px
    letter-spacing: 0.1em
      
</style>
