<script>
import CoursesTop from "./CoursesTop.vue";
export default {
  name: "AppCourses",
  components: {
    CoursesTop,
  },
};
</script>

<template>
  <section id="courses">
    <CoursesTop />
  </section>
</template>

<style lang="scss" scoped>
#courses {
  height: 95rem;
}
</style>
