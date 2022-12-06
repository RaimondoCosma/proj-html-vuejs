<script>
import AppPreFooter from "./pre-footer/AppPreFooter.vue";
import AppCredits from "./credits-footer/AppCredits.vue";
export default {
  name: "AppFooter",
  components: {
    AppPreFooter,
    AppCredits,
  },
};
</script>

<template>
  <AppPreFooter />
  <AppCredits />
</template>

<style lang="scss" scoped></style>
