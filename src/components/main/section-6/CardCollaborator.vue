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
      ><a href="#">{{ collaborator.link }}</a>
      <font-awesome-icon icon="fa-solid fa-chevron-right"
    /></span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 4 - 2.3438rem);
  text-align: center;
  border-radius: 0 0 2.5rem 0;
  transition: transform 0.3s linear, background-color 0.3s linear;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.05);
  }
  @include media-breakpoint-up(md) {
    width: 80%;
    flex-shrink: 0;
    margin-bottom: 2.5rem;
    align-self: center;
  }
  &:not(:last-child) {
    margin-right: 3.125rem;
    @include media-breakpoint-up(md) {
      margin-right: 0;
    }
  }
  & > * {
    margin-bottom: 2.5rem;
    @include media-breakpoint-up(md) {
      margin-bottom: 1.25rem;
    }
  }
  img {
    width: 60%;
  }
  span {
    display: inline-block;
    a {
      color: inherit;
    }
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
