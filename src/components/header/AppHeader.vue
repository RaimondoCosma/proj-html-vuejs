<script>
import AppLogo from "./AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
  data() {
    return {
      navbar: [
        {
          link: "Home",
          active: false,
        },
        {
          link: "Services",
          active: false,
        },
        {
          link: "About",
          active: false,
        },
        {
          link: "Videos",
          active: false,
        },
        {
          link: "Blog",
          active: false,
        },
        {
          link: "Store",
          active: false,
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <section class="container nav">
      <AppLogo />
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 6.25rem;
  background-color: var(--primary-color);
  .nav {
    display: flex;
    align-items: center;
  }
}
</style>
