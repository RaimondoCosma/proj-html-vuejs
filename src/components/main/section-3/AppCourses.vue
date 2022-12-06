<script>
import CoursesTop from "./CoursesTop.vue";
import CoursesBottom from "./CoursesBottom.vue";
export default {
  name: "AppCourses",
  components: {
    CoursesTop,
    CoursesBottom,
  },
};
</script>

<template>
  <section id="courses">
    <CoursesTop />
    <CoursesBottom />
  </section>
</template>

<style lang="scss" scoped>
#courses {
  height: 95rem;
}
</style>
