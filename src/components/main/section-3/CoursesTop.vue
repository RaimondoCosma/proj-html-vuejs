<script>
export default {
  name: "CoursesTop",
};
</script>

<template>
  <div class="bg-image">
    <div class="container">
      <div class="spot">
        <span class="certified">Join our mailing list today</span>
        <h2>Insider offers & flash sales in your inbox every week</h2>
        <span
          ><font-awesome-icon v-for="n in 3" icon="fa-solid fa-chevron-up"
        /></span>
        <form>
          <input type="text" name="email" id="email" />
          <button type="submit"><div class="btn">Subscribe</div></button>
        </form>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus
          dolor sit amet, consectetur adipiscing elit sed porttitor lectus.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-image {
  padding: 7.1875rem 0;
  background-image: linear-gradient(
      to right,
      var(--primary-color) 40%,
      transparent 70%
    ),
    url("./../../../assets/img/section-3/banner1-2x.jpg");
  background-size: cover;
  background-position: right;
}
.spot {
  width: 60%;
  @include media-breakpoint-up(md) {
    width: 100%;
    padding: 0 1.25rem;
  }
  .certified {
    color: var(--spot-color);
    font-size: 1.625rem;
    @include media-breakpoint-up(md) {
      font-size: 1.25rem;
    }
  }
  h2 {
    padding: 2.5rem 0;
  }
  .fa-chevron-up {
    color: var(--chevron-color);
  }
  span {
    display: inline-block;
  }
  p {
    font-size: 1.25rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
  input {
    width: 50%;
    border-radius: 2.5rem;
    padding: 0.5rem;
    margin: 3.75rem 1.875rem 2.5rem 0;
  }
  button {
    width: 30%;
  }
  .btn {
    width: 100%;
  }
}
</style>
