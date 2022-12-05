<script>
import AppLogo from "./AppLogo.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
    NavBar,
  },
  data() {
    return {
      navbar: [
        {
          linkName: "Home",
          isButton: false,
          active: false,
        },
        {
          linkName: "Services",
          isButton: false,
          active: false,
        },
        {
          linkName: "About",
          isButton: false,
          active: false,
        },
        {
          linkName: "Videos",
          isButton: false,
          active: false,
        },
        {
          linkName: "Blog",
          isButton: false,
          active: false,
        },
        {
          linkName: "Store",
          isButton: false,
          active: false,
        },
        {
          linkName: "Schedule a workout",
          isButton: true,
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
      <ul>
        <NavBar v-for="link in navbar" :link="link" />
        <li>
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
      </ul>
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 6.25rem;
  padding: 25px 0;
  background-color: var(--primary-color);
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      .fa-cart-shopping {
        margin-right: 2.5rem;
      }
    }
  }
}
</style>
