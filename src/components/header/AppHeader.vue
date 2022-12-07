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
  padding: 25px 0.3125rem;
  background-color: var(--primary-color);
  box-shadow: 0px 1px 5px 0px #3a3838;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
