<script>
import { store } from "./../../store";
import AppHero from "./hero/AppHero.vue";
import AppCardMotivation from "./section-1/AppCardMotivation.vue";
import AppMotivation from "./section-1/AppMotivation.vue";
import AppEncourage from "./section-2/AppEncourage.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    AppCardMotivation,
    AppMotivation,
    AppEncourage,
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
  <AppEncourage />
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
