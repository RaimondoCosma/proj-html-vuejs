<script>
import { store } from "../../../store";
import BottomEncourageCard from "./BottomEncourageCard.vue";
export default {
  name: "BottomEncourage",
  components: {
    BottomEncourageCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="nav">
      <h3>Featured playlists</h3>
      <span
        ><a href="#"
          >Views all videos
          <font-awesome-icon icon="fa-solid fa-chevron-right" /></a
      ></span>
    </div>
    <div class="playlist">
      <BottomEncourageCard
        v-for="playlist in store.playlists"
        :playlist="playlist"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  padding: 2.8125rem 0;
  justify-content: space-between;
  color: var(--primary-color);
  a {
    color: inherit;
  }
}
.playlist {
  display: flex;
  @include media-breakpoint-up(md) {
    flex-direction: column;
  }
}
</style>
