<script>
import TopEncourage from "./TopEncourage.vue";
export default {
  name: "AppEncourage",
  components: {
    TopEncourage,
  },
};
</script>

<template>
  <section id="encourage">
    <TopEncourage />
  </section>
</template>

<style lang="scss" scoped>
#encourage {
  background-image: var(--lighter-color);
}
</style>
