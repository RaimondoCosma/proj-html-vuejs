<script>
export default {
  name: "SpotEncourage",
};
</script>

<template>
  <div class="top-encourage-right">
    <span>Tune up your workouts</span>
    <h2>The best health & fitness advice online</h2>
    <div class="yt-reference">
      <img src="./../../../assets/img/section-2/unnamed.jpg" alt="logo" />
      <div class="yt-advice">
        <small>ThemeFusion</small>
        <div class="buttons">
          <span class="btn-small-primary">
            <a href="#"><i class="fa-brands fa-youtube"></i>You Tube</a>
          </span>
          <span class="btn-small-secondary">
            <a href="#">999+</a>
          </span>
        </div>
      </div>
    </div>
    <p>
      Arcu eu facilisi ut quisque placerat nunc habitant. Magna semper mauris,
      venenatis, leo integer sit pellentesque.
    </p>
    <div class="btn-red">
      <a href="#"
        ><i class="fa-brands fa-youtube"></i>Visit my YouTube channel</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-encourage-right {
  width: 50%;
  color: var(--primary-color);
  padding: 0 8.4375rem;
  span {
    font-size: 1.5rem;
    color: var(--btn-color);
  }
  h2 {
    padding: 3.125rem 0;
    font-size: 3.5rem;
  }
  .yt-reference {
    display: flex;
    align-items: initial;
    .yt-advice {
      display: flex;
      flex-direction: column;
      margin-left: 0.9375rem;
      .fa-youtube {
        margin-right: 0.3125rem;
      }
      small {
        color: var(--secondary-color);
        font-weight: bold;
      }
    }
  }
  .buttons {
    margin-top: 0.625rem;
  }
  p {
    color: var(--light-black);
    padding: 2.1875rem 0;
  }
  .btn-red .fa-youtube {
    margin-right: 0.625rem;
  }
}
</style>
