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
}
.btn {
  background-color: var(--btn-color);
  border-radius: 2.5rem;
  padding: 0.625rem 1.875rem;
  cursor: pointer;
  a {
    color: var(--lighter-color);
  }
}
</style>
