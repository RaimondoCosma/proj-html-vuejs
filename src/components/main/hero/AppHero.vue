<script>
export default {
  name: "AppHero",
};
</script>

<template>
  <section id="jumbotron">
    <div class="banner">
      <div class="banner-1">
        <i class="fa-solid fa-folder"></i>
        <small>Demos</small>
      </div>
      <div class="banner-2">
        <span class="price">39</span><br />
        <small>On sale</small>
      </div>
    </div>
    <div class="spot container">
      <div class="spot-left">
        <span class="certified">Certified fitness professional</span>
        <h1>Take control of your health</h1>
        <span v-for="n in 3"><i class="fa-solid fa-chevron-up"></i></span>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus
          dolor sit amet
        </p>
        <span class="btn"
          ><a href="#"
            ><i class="fa-brands fa-youtube"></i>Visit my YouTube channel</a
          ></span
        >
        <span class="btn btn-secondary"
          ><a href="#">Buy Avada today<i class="fa-solid fa-arrow-right"></i></a
        ></span>
      </div>
      <div class="play-button">
        <i class="fa-solid fa-play"></i>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#jumbotron {
  position: relative;
  min-height: 42.5rem;
  padding: 8.125rem 0;
  background-image: linear-gradient(
      to right,
      var(--primary-color) 40%,
      transparent 90%
    ),
    url("./../../../assets/img/slider82x-scaled.jpg");
  background-size: cover;
  background-position: center;
  .banner {
    position: absolute;
    top: 3.125rem;
    right: 0.9375rem;
    .banner-1,
    .banner-2 {
      height: 4.125rem;
      width: 4.125rem;
      text-align: center;
      color: var(--banner-color);
      padding: 0.625rem;
      margin-bottom: 0.3125rem;
      background-color: var(--lighter-color);
      border-radius: 0.3125rem;
    }
    .banner-1 {
      .fa-folder {
        display: inline-block;
        font-size: 2.1875rem;
      }
    }
    .banner-2 {
      .price {
        position: relative;
        left: 0.3125rem;
        font-size: 1.625rem;
        font-weight: bold;
        color: var(--sales-color);
        &::before {
          content: "$";
          position: absolute;
          left: -0.5625rem;
          top: -0.1875rem;
          font-size: 1.125rem;
        }
      }
    }
  }
}
.spot {
  display: flex;
  align-items: center;
}
.spot-left {
  .certified {
    color: var(--spot-color);
    font-size: 1.625rem;
  }
  h1 {
    color: var(--lighter-color);
  }
  p {
    font-size: 1.25rem;
  }
  .fa-chevron-up {
    color: var(--chevron-color);
  }
  span {
    display: inline-block;
  }
  .btn {
    margin-right: 0.9375rem;

    .fa-youtube {
      margin-right: 0.625rem;
    }
    .fa-arrow-right {
      margin-left: 0.625rem;
    }
  }
}
.spot-left > * {
  margin-bottom: 2.3125rem;
}
.play-button {
  position: relative;
  width: 50%;
  text-align: center;
  .fa-play {
    background-color: var(--lighter-color);
    color: var(--btn-color);
    padding: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
