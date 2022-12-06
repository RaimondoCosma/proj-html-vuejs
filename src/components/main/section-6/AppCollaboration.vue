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
}
.container {
  display: flex;
}
</style>
