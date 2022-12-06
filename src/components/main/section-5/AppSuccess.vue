<script>
import SuccessMotivational from "./SuccessMotivational.vue";
export default {
  name: "AppSuccess",
  components: {
    SuccessMotivational,
  },
};
</script>

<template>
  <div id="success-motivational">
    <SuccessMotivational />
  </div>
</template>

<style lang="scss" scoped>
#success-motivational {
  padding: 12.5rem 0;
  background-image: url("./../../../assets/img/section-5/banner2-2x.jpg");
  background-position: center;
  background-size: cover;
}
</style>
