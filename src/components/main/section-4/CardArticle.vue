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
  @include media-breakpoint-up(md) {
    width: 80%;
    flex-shrink: 0;
    margin-bottom: 1.25rem;
    align-self: center;
  }
  &:not(:last-child) {
    margin-right: 3.125rem;
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
  .img {
    position: relative;
    transition: transform 0.3s linear;
    &:hover {
      cursor: pointer;
      transform: scale(1.08);
    }
  }
  h3 {
    padding: 1.875rem 0 0.9375rem;
  }
}
</style>
