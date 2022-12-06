<script>
import { store } from "./../../store";
import AppHero from "./hero/AppHero.vue";
import AppSectionMotivation from "./section-1/AppSectionMotivation.vue";
import AppEncourage from "./section-2/AppEncourage.vue";
import AppCourses from "./section-3/AppCourses.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    AppSectionMotivation,
    AppEncourage,
    AppCourses,
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
  <AppSectionMotivation />
  <AppEncourage />
  <AppCourses />
</template>

<style lang="scss" scoped></style>
