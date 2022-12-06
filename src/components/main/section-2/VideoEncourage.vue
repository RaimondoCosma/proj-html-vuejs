<script>
export default {
  name: "VideoEncourage",
};
</script>

<template>
  <div class="top-encourage-left">
    <img
      src="./../../../assets/img/section-2/service15-2x.jpg"
      alt="video-crunch"
    />
    <div class="play-button">
      <i class="fa-solid fa-play"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-encourage-left {
  position: relative;
  width: 50%;
  flex-shrink: 0;
  border-radius: 0 0 2.5rem 0;
  overflow: hidden;
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .fa-play {
      background-color: var(--lighter-color);
      color: var(--btn-color);
      padding: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>
