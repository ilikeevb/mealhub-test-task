<template>
  <div class="container">
    <div v-if="comments.length" >
      <Table :comments="comments" />
      <Pagination />
    </div>
    <Loader v-else />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    comments() {
      return this.$store.getters.GET_COMMENTS;
    },
  },
  mounted() {
    this.$store.dispatch("GET_COMMENTS");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
