<template>
  <p>comment: {{ comment }}</p>
</template>

<script>
export default {
  computed: {
    comment() {
      return this.$store.getters.GET_COMMENT_BY_ID(this.$route.params.id);
    },
  },
};
</script>