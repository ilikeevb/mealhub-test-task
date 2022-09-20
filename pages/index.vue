<template>
  <div class="container">
    <Table :comments="comments" />
    <Pagination :pages="pages" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    comments() {
      return this.$store.getters.GET_COMMENTS;
    },
    pages() {
      return this.$store.getters.GET_PAGES;
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
