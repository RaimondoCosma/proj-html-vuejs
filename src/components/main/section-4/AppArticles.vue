<script>
import { store } from "./../../../store";
import CardArticle from "./CardArticle.vue";
export default {
  name: "AppArticles",
  components: {
    CardArticle,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section id="articles">
    <div class="container">
      <CardArticle v-for="article in store.articles" :article="article" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#articles {
  padding: 8.125rem 0;
}
.container {
  display: flex;
}
</style>
