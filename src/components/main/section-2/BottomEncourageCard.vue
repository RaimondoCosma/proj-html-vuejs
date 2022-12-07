<script>
import { store } from "../../../store";
export default {
  name: "BottomEncourageCard",
  props: {
    playlist: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="img">
      <img
        :src="`/src/assets/img/section-2/${playlist.img}`"
        :alt="playlist.title"
      />
      <div class="play-button">
        <font-awesome-icon icon="fa-solid fa-play" />
      </div>
    </div>
    <h3>{{ playlist.title }}</h3>
    <span>{{ playlist.subtitle }}</span>
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
    flex-wrap: wrap;
    align-self: center;
    margin-bottom: 1.25rem;
  }
  &:not(:last-child) {
    margin-right: 3.125rem;
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
  .img {
    position: relative;
  }
  h3 {
    padding: 1.875rem 0 0.9375rem;
  }
  span {
    color: var(--btn-color);
  }
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .fa-play {
    font-size: 0.875rem;
    background-color: var(--lighter-color);
    color: var(--btn-color);
    padding: 1.25rem;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
