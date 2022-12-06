<script>
export default {
  name: "AppCredits",
};
</script>

<template>
  <div class="credits">
    <p>
      <i class="fa-regular fa-copyright"></i> Copyright 2012 - 2020 | Avada
      theme by <strong>ThemeFusion</strong> | All rights reserved | Powered by
      <strong>WordPress</strong>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.credits {
  text-align: center;
  background-color: var(--primary-color);
  padding: 2.5rem 0;
  border-top: 0.0625rem solid var(--secondary-color);
  strong {
    color: var(--lighter-color);
  }
}
</style>
