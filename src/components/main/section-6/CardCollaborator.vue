<script>
export default {
  name: "CardCollaborator",
  props: {
    collaborator: Object,
  },
};
</script>

<template>
  <div class="card">
    <div class="img">
      <img :src="`/src/assets/img/section-6/${collaborator.img}`" alt="logo" />
    </div>
    <span
      ><font-awesome-icon v-for="n in 3" icon="fa-solid fa-chevron-up"
    /></span>
    <p>
      {{ collaborator.description }}
    </p>
    <span class="link"
      >{{ collaborator.link }}
      <font-awesome-icon icon="fa-solid fa-chevron-right"
    /></span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 4 - 2.3438rem);
  text-align: center;
  &:not(:last-child) {
    margin-right: 3.125rem;
  }
  & > * {
    margin-bottom: 2.5rem;
  }
  img {
    width: 60%;
  }
  span {
    display: inline-block;
    .fa-chevron-up {
      color: var(--btn-color);
    }
  }
  p {
    color: var(--light-black);
  }
  .link {
    color: var(--primary-color);
    font-weight: bold;
    .fa-chevron-right {
      color: inherit;
      font-size: 0.75rem;
    }
  }
}
</style>
