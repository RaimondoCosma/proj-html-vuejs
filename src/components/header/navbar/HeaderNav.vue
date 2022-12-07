<script>
import NavBar from "./NavBar.vue";
export default {
  name: "HeaderNav",
  components: {
    NavBar,
  },
  data() {
    return {
      isActive: false,
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
  methods: {
    showMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<template>
  <div class="hamburger" @click="showMenu">
    <div
      class="hamburger-menu"
      :class="{ 'ham-animation': this.isActive }"
    ></div>
  </div>
  <ul :class="{ 'show-ul': this.isActive }">
    <NavBar v-for="link in navbar" :link="link" />
    <li>
      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </li>
    <li>
      <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  list-style: none;
  @include media-breakpoint-up(lg) {
    position: fixed;
    right: -50%;
    top: 6.25rem;
    display: flex;
    flex-direction: column;
    max-height: 25rem;
    width: 50%;
    border-radius: 1.25rem 0 0 1.25rem;
    overflow: hidden;
    overflow-y: auto;
    box-shadow: -5px 5px 10px 0px #000000;
    transition: right 0.3s ease-out;
    li {
      text-align: center;
      cursor: pointer;
      padding: 1.875rem 0;
      width: 100%;
      background-color: var(--lighter-color);
      border: 0.0625rem solid var(--primary-color);
      transition: background-color 0.3s linear;
      &:hover {
        background-color: var(--spot-color);
      }
      a {
        color: var(--primary-color);
      }
      .fa-cart-shopping {
        margin-right: 0;
      }
    }
  }
  .fa-cart-shopping {
    margin-right: 2.5rem;
  }
}
.hamburger {
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
}
.hamburger-menu {
  position: relative;
  width: 1.875rem;
  height: 0.3125rem;
  background-color: var(--lighter-color);
  border-radius: 0.3125rem;
  z-index: 999;
  display: none;
  transition: 0.2s background-color linear 0.2s;
  @include media-breakpoint-up(lg) {
    display: block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.3125rem;
    background-color: var(--lighter-color);
    border-radius: 0.3125rem;
    transition: 0.4s transform, width linear;
  }
  &::after {
    top: 0.625rem;
    left: 0;
    width: 1.5625rem;
  }
  &::before {
    top: -0.625rem;
    left: 0;
    width: 1.25rem;
  }
}
.ham-animation {
  background-color: transparent;

  &::after {
    top: 0;
    width: 1.875rem;
    transform: rotate(225deg);
  }
  &::before {
    top: 0;
    width: 1.875rem;
    transform: rotate(-225deg);
  }
}
.show-ul {
  right: 0;
}
</style>
