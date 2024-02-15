<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed} from "vue";
import { Back } from "@element-plus/icons-vue";
import { ROUTES_PATHS } from "../constants/index";

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  }
});

const route = useRoute();
const router = useRouter();

const routeName = computed(() => route.name);


const goForCocktailRandom = () => {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM);
  if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
    router.go();
  }
}

const goBack = () => {
    props.backFunc ? props.backFunc() : router.go(-1);
}

</script>

<template>
  <div class="root">
    <div  class="img">
      <img :src="`${imgUrl}`" alt="" class="img">
    </div>
    <section class="main">
      <div class="btns">
        <el-button
        v-if="isBackButtonVisible"
          class="back"
          type="primary"
          :icon="Back"
          circle
          @click="goBack"
        />
        <el-button class="btn" @click="goForCocktailRandom">Get random cocktail</el-button>
      </div>

      <slot></slot>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.sass';

.root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: $background;

    @media screen and (min-width: 480px) {
        flex-direction: row;
        min-height: 100vh;
    }
}

.img {
    width: 100%;
    min-height: 50vh;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    z-index: 100;

    @media screen and (min-width: 480px) {
        width: 50vw;
        min-height: 100vh;
    }
}

.main {
    position: relative;
    width: 100%;

    @media screen and (min-width: 480px) {
        width: 50%;
    }
}
  


.btn{
    position: absolute;
    top: 32px;
    right: 40px;
    font-size: 16px;
    font-family: 'Raleway', 'Arial', sans-serif;
    background-color: $accent;
    border-color: $accent;
    color: $text;

    &:hover,
    &:active{
        background-color: darken($accent, 20%);
        border-color: darken($accent, 20%);
    }
}

// .btns
//   display: flex
//   justify-content: space-between
//   align-items: center

.back{
  position: absolute;
  top: 32px;
  left: 40px;
  background-color: transparent;
  border-color: #fff;

  &:hover{
    border-color: $accent;
  }
}
</style>
