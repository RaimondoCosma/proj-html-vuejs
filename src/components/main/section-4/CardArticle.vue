<script>
export default {
  name: "CardArticle",
  props: {
    article: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="img">
      <img
        :src="`/src/assets/img/section-4/${article.img}`"
        :alt="article.title"
      />
    </div>
    <h3>{{ article.title }}</h3>
    <span>{{ article.subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  text-align: center;
  width: calc(100% / 3 - 2.0831rem);
  color: var(--primary-color);
  border-radius: 0 0 2.5rem 0;
  overflow: hidden;
  &:not(:last-child) {
    margin-right: 3.125rem;
  }
  .img {
    position: relative;
  }
  h3 {
    padding: 1.875rem 0 0.9375rem;
  }
}
</style>
