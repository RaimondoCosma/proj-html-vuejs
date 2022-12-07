<script>
export default {
  name: "CardCourses",
  props: {
    course: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="img">
      <img :src="`/src/assets/img/section-3/${course.img}`" :alt="course.img" />
      <div class="image-title">
        <h3>{{ course.title }}</h3>
        <span class="sub-title">{{ course.subtitle }}</span>
      </div>
      <p>
        {{ course.description }}
      </p>
      <a href="#"
        >{{ course.link }} <font-awesome-icon icon="fa-solid fa-chevron-right"
      /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 3 - 2.0831rem);
  text-align: center;
  padding: 4.6875rem 2.8125rem;
  border: 0.1875rem solid var(--btn-color);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: transform 0.3s linear;
  @include media-breakpoint-up(md) {
    width: 80%;
    flex-shrink: 0;
    margin-bottom: 1.25rem;
    align-self: center;
    padding: 3.125rem 2.8125rem;
  }
  &:hover {
    transform: scale(1.04);
  }
  &:not(:last-child) {
    margin-right: 3.125rem;
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
  img {
    filter: contrast(0);
    width: 4.375rem;
    height: 4.375rem;
  }
  .image-title {
    padding: 2.1875rem 0 3.125rem;
    @include media-breakpoint-up(md) {
      padding: 1.25rem 2.1875rem;
    }
  }
  h3 {
    color: var(--lighter-color);
    font-size: 1.625rem;
    @include media-breakpoint-up(md) {
      font-size: 1.25rem;
    }
  }
  .sub-title {
    font-size: 1.5rem;
    color: var(--chevron-color);
    @include media-breakpoint-up(md) {
      font-size: 1.125rem;
    }
  }
  p {
    font-size: 1.125rem;
    padding-bottom: 3.125rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
      padding-bottom: 2.1875rem;
    }
  }
  a {
    color: var(--lighter-color);
  }
}
</style>
