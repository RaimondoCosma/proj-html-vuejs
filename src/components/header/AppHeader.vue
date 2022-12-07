<script>
import AppLogo from "./navbar/AppLogo.vue";
import HeaderNav from "./navbar/HeaderNav.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    HeaderNav,
  },
};
</script>

<template>
  <header>
    <section class="container nav">
      <AppLogo />
      <HeaderNav />
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 6.25rem;
  padding: 25px 0;
  background-color: var(--primary-color);
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
