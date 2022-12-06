<script>
export default {
  name: "AppWod",
};
</script>

<template>
  <section id="wod">
    <div class="container-small">
      <div class="play-button">
        <i class="fa-solid fa-play"></i>
      </div>
      <h2>Crossfit workout of the day</h2>
      <h3>November 15th, 2019</h3>
      <span
        ><a href="#"
          >View all videos <i class="fa-solid fa-arrow-right-long"></i></a
      ></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#wod {
  padding: 10.3125rem 0 11.5625rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 142, 0.5) 50%,
      rgba(255, 0, 179, 0.3) 90%
    ),
    url("./../../../assets/img/section-7/banner14-2x.jpg");
  background-position: center;
  background-size: cover;
  backdrop-filter: invert(100%);
}
.container-small {
  text-align: center;
  & > * {
    margin-bottom: 2.5rem;
  }
  .fa-play {
    background-color: var(--lighter-color);
    color: var(--btn-color);
    padding: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  h3 {
    font-size: 2.125rem;
    color: var(--chevron-color);
  }
  span a {
    color: var(--lighter-color);
  }
}
</style>
