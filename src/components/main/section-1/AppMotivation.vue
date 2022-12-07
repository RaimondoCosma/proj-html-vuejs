<script>
export default {
  name: "AppMotivation",
};
</script>

<template>
  <div class="container">
    <h2>
      "How you respond to the challenge in the second half will determine what
      you become after the game, whether you are a winner or a loser."
    </h2>
    <span
      ><font-awesome-icon v-for="n in 3" icon="fa-solid fa-chevron-up"
    /></span>
    <div class="author">
      <a href="#"
        ><img src="./../../../assets/img/avatar-1-2x.jpg" alt="Brad Johnson"
      /></a>
      <a href="#"><h4>Brad Jhonson</h4></a>
      <a href="#">Las Vegas</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding-bottom: 9.375rem;
}
h2 {
  font-size: 2.625rem;
  padding: 3.125rem 10rem 2.1875rem;
}
.author {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3125rem;
  padding-top: 0.625rem;
  & > * {
    margin-right: 1.25rem;
  }
  img {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
  }
  h4 {
    color: var(--lighter-color);
  }
}
</style>
