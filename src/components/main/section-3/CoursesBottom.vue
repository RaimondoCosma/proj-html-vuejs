<script>
import { store } from "./../../../store";
import CardCourses from "./CardCourses.vue";
export default {
  name: "CoursesBottom",
  components: {
    CardCourses,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="bg-courses-bottom">
    <div class="container">
      <CardCourses v-for="course in store.courses" :course="course" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-courses-bottom {
  background-color: var(--primary-color);
  padding: 6.875rem 0 7.5rem;
}
.container {
  display: flex;
}
</style>
