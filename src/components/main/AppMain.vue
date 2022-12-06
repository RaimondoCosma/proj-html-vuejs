<script>
import { store } from "./../../store";
import AppHero from "./hero/AppHero.vue";
import AppSectionMotivation from "./section-1/AppSectionMotivation.vue";
import AppEncourage from "./section-2/AppEncourage.vue";
import AppCourses from "./section-3/AppCourses.vue";
import AppArticles from "./section-4/AppArticles.vue";
import AppSuccess from "./section-5/AppSuccess.vue";
import AppCollaboration from "./section-6/AppCollaboration.vue";

export default {
  name: "AppMain",
  components: {
    AppHero,
    AppSectionMotivation,
    AppEncourage,
    AppCourses,
    AppArticles,
    AppSuccess,
    AppCollaboration,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <AppHero />
    <AppSectionMotivation />
    <AppEncourage />
    <AppCourses />
    <AppArticles />
    <AppSuccess />
    <AppCollaboration />
  </main>
</template>

<style lang="scss" scoped></style>
