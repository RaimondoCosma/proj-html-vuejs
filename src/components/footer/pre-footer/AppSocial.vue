<script>
import { store } from "./../../../store";
export default {
  name: "AppSocial",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="social">
    <img src="./../../../assets/img/logo/logo.png" alt="logo" />
    <p>
      Ac aliquam neque sagittis diamfaucibus vitae purus turpis phasellus.
      Pellentesque consectetur amet purus ultrices mauris.
    </p>
    <a href="#"
      ><font-awesome-icon
        class="icons"
        v-for="social in store.socialLink"
        :icon="social.icon"
    /></a>
  </div>
</template>

<style lang="scss" scoped>
.social {
  width: 25%;
  text-align: center;
  & > * {
    margin-bottom: 2.5rem;
  }
}
.social a {
  color: var(--spot-color);
  .icons {
    display: inline-block;
    margin-right: 0.9375rem;
  }
}
</style>
