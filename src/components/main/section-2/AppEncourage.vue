<script>
import TopEncourage from "./TopEncourage.vue";
import BottomEncourage from "./BottomEncourage.vue";
export default {
  name: "AppEncourage",
  components: {
    TopEncourage,
    BottomEncourage,
  },
};
</script>

<template>
  <section id="encourage">
    <TopEncourage />
    <BottomEncourage />
  </section>
</template>

<style lang="scss" scoped>
#encourage {
  background-image: var(--lighter-color);
  padding-bottom: 9.375rem;
}
</style>
