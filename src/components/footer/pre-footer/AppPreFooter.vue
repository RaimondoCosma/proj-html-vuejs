<script>
import AppSocial from "./AppSocial.vue";
import RecentPosts from "./RecentPosts.vue";
import AppContact from "./AppContact.vue";

export default {
  name: "AppPreFooter",
  components: {
    AppSocial,
    RecentPosts,
    AppContact,
  },
};
</script>

<template>
  <section id="pre-footer">
    <div class="container">
      <AppSocial />
      <RecentPosts />
      <AppContact />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#pre-footer {
  background-color: var(--primary-color);
  padding: 8.125rem 0 7.5rem;
  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
