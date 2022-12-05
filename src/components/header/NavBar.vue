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
</style>
