<script>
export default {
  name: "SuccessMotivational",
};
</script>

<template>
  <div class="spot container-small">
    <h2>
      "I've failed over and over again in my life. And that is why I succeed."
    </h2>
    <span
      ><font-awesome-icon v-for="n in 3" icon="fa-solid fa-chevron-up"
    /></span>
    <p>
      Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia
      lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam
      in iaculis
    </p>
    <span class="btn"
      ><a href="#"
        >Buy Avada today
        <font-awesome-icon icon="fa-solid fa-chevron-right" /></a
    ></span>
  </div>
</template>

<style lang="scss" scoped>
.spot {
  text-align: center;
  & > * {
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1.25rem;
    @include media-breakpoint-up(md) {
      font-size: 1rem;
    }
  }
  .fa-chevron-up {
    color: var(--chevron-color);
  }
  span {
    display: inline-block;
  }
  .btn {
    margin-right: 0.9375rem;
    .fa-chevron-right {
      font-size: 0.75rem;
      margin-left: 0.625rem;
    }
  }
}
.spot-left > * {
  margin-bottom: 2.3125rem;
}
</style>
