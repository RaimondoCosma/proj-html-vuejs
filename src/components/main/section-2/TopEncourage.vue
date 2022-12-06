<script>
import VideoEncourage from "./VideoEncourage.vue";
import SpotEncourage from "./SpotEncourage.vue";
export default {
  name: "TopEncourage",
  components: {
    VideoEncourage,
    SpotEncourage,
  },
};
</script>

<template>
  <div id="top-encourage">
    <VideoEncourage />
    <SpotEncourage />
  </div>
</template>

<style lang="scss" scoped>
#top-encourage {
  display: flex;
  align-items: center;
  position: relative;
  top: -50px;
}
</style>
