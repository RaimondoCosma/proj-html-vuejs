<script>
import { store } from "../../../store";

export default {
  name: "AppCardMotivation",
  props: {
    offert: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="image">
    <a href="#">
      <img :src="`/src/assets/img/offerts/${offert.img}`" :alt="offert.title" />

      <div class="spot-image">
        <span
          ><font-awesome-icon v-for="n in 3" icon="fa-solid fa-chevron-up"
        /></span>
        <h3>{{ offert.title }}</h3>
        <span class="sub-title">{{ offert.subtitle }}</span>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.image {
  position: relative;
  width: calc(100% / 3 - 2.0831rem);
  border-radius: 0.3125rem 0.3125rem 2.5rem 0.3125rem;
  overflow: hidden;
  transition: transform 0.3s linear;
  @include media-breakpoint-up(md) {
    width: 80%;
    flex-shrink: 0;
    margin-bottom: 1.25rem;
  }
  &:not(:last-child) {
    margin-right: 3.125rem;
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
  &:hover .spot-image {
    background-color: rgba(0, 0, 0, 0);
  }
  .spot-image {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    color: var(--lighter-color);
    padding: 2.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s linear;
    .fa-chevron-up {
      color: inherit;
    }
    h3 {
      font-size: 1.75rem;
      padding-top: 1.25rem;
      @include media-breakpoint-up(lg) {
        font-size: 1.375rem;
      }
    }
    .sub-title {
      font-size: 1.25rem;
      color: var(--chevron-color);
      @include media-breakpoint-up(lg) {
        font-size: 1rem;
      }
    }
  }
}
</style>
