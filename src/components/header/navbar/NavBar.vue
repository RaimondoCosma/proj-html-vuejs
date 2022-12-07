<script>
export default {
  name: "NavBar",
  props: {
    link: Object,
  },
};
</script>

<template>
  <li :class="{ btn: link.isButton }">
    <a href="#">{{ link.linkName }}</a>
  </li>
</template>

<style lang="scss" scoped>
li {
  margin-right: 2.5rem;
  a {
    transition: color 0.2s linear;
    &:hover {
      color: var(--lighter-color);
    }
  }
  @include media-breakpoint-up(lg) {
    cursor: pointer;
    margin-right: 0;
    border: 0.0625rem solid var(--secondary-color);
    transition: background-color 0.3s linear;
    &:hover {
      background-color: var(--spot-color);
    }
    a {
      color: var(--primary-color);
    }
  }
}
</style>
