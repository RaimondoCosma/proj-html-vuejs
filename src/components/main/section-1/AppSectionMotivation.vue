<script>
import { store } from "./../../../store";

import AppCardMotivation from "./AppCardMotivation.vue";
import AppMotivation from "./AppMotivation.vue";
export default {
  name: "AppSectionMotivation",
  components: {
    AppCardMotivation,
    AppMotivation,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section id="motivational">
    <div class="motivational container">
      <div class="image-container">
        <AppCardMotivation v-for="offert in store.offerts" :offert="offert" />
      </div>
    </div>
    <AppMotivation />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: linear-gradient(to right bottom, #1817d5 3%, #ca0117 97%);
  .image-container {
    position: relative;
    top: -4.875rem;
    display: flex;
    align-items: center;
    @include media-breakpoint-up(md) {
      flex-direction: column;
    }
  }
}
</style>
