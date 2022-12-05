<script>
import PageTitle from "./components/PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
};
</script>

<template>
  <div>
    <PageTitle />
    <font-awesome-icon icon="fa-solid fa-user-secret" />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
