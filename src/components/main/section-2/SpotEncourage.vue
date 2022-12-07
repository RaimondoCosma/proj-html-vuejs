<script>
export default {
  name: "SpotEncourage",
};
</script>

<template>
  <div class="top-encourage-right">
    <span class="spot">Tune up your workouts</span>
    <h2>The best health & fitness advice online</h2>
    <div class="yt-reference">
      <img src="./../../../assets/img/section-2/unnamed.jpg" alt="logo" />
      <div class="yt-advice">
        <small>ThemeFusion</small>
        <div class="buttons">
          <span class="btn-small-primary">
            <a href="#"
              ><font-awesome-icon icon="fa-brands fa-youtube" />You Tube</a
            >
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
        ><font-awesome-icon icon="fa-brands fa-youtube" />Visit my YouTube
        channel</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-encourage-right {
  width: 50%;
  color: var(--primary-color);
  padding: 0 8.4375rem;
  .spot {
    font-size: 1.5rem;
    color: var(--btn-color);
  }
  h2 {
    padding: 3.125rem 0;
    color: var(--primary-color);
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
    a {
      font-size: 0.875rem;
    }
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
