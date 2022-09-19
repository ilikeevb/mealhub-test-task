<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="comment in comments"
          :key="comment.id"
          @click="openComment(comment.id)"
        >
          <td>{{ comment.id }}</td>
          <td>{{ comment.name }}</td>
          <td>{{ comment.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NuxtTable",
  mounted() {
    this.$store.dispatch("GET_COMMENTS");
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
  },
  methods: {
    openComment(commentId) {
      this.$router.push({ path: `/comments/${commentId}` });
    },
  },
};
</script>
    