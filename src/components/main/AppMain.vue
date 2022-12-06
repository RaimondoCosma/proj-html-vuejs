<script>
import { store } from "./../../store";
import AppHero from "./hero/AppHero.vue";
import AppCardMotivation from "./AppCardMotivation.vue";
import AppMotivation from "./AppMotivation.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
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
  <AppHero />
  <section>
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
  min-height: 63.75rem;
  background-image: linear-gradient(to right bottom, #1817d5 3%, #ca0117 97%);
  .image-container {
    position: relative;
    top: -4.875rem;
    display: flex;
    align-items: center;
  }
}
</style>
