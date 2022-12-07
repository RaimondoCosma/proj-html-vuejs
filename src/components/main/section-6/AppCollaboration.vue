<script>
import { store } from "./../../../store";
import CardCollaborator from "./CardCollaborator.vue";
export default {
  name: "AppCollaboration",
  components: {
    CardCollaborator,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div id="sponsor">
    <div class="container">
      <CardCollaborator
        v-for="collaborator in store.collaborators"
        :collaborator="collaborator"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#sponsor {
  padding: 7.5rem 0 10rem;
  @include media-breakpoint-up(md) {
    padding: 5rem 0;
  }
}
.container {
  display: flex;
  @include media-breakpoint-up(md) {
    flex-direction: column;
  }
}
</style>
