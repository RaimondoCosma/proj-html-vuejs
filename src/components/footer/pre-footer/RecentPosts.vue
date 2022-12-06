<script>
import { store } from "./../../../store";
export default {
  name: "RecentPosts",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="recent-posts">
    <h3>RECENT POSTS</h3>
    <ul>
      <li v-for="post in store.posts">
        <i class="fa-solid fa-chevron-right"></i> {{ post.name
        }}<a href="#"></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.recent-posts {
  text-align: center;
  width: 25%;
  color: var(--lighter-color);
  h3 {
    margin-bottom: 2.1875rem;
  }
  ul > * {
    margin-bottom: 1.875rem;
  }
  .fa-chevron-right {
    font-size: 0.75rem;
  }
}
</style>
