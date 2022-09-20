<template>
    <div class="container">
      <div class="comment">
        <NuxtLink to="/">На главную</NuxtLink>
        <p>Пользователь <a>{{ page.comment.email }}</a> оставил комментарий к посту <a>{{page.post.title}}</a></a></p>
        <h2>{{ page.comment.name }}</h2>
        <p>{{ page.comment.body }}</p>
      </div>
    </div>
  
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("GET_COMMENT_BY_ID", this.$route.params.id);
  },
  computed: {
    page() {
      return this.$store.getters.GET_OPEN_COMMENT;
    },
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
.comment {
  padding: 10px 20px;
  border-radius: 10px;
  background: #0000000d;
  max-width: 720px;
}
a {
  font-weight: 600;
  text-decoration: none;
  color: #2975cc;
}
a:hover {
  cursor: pointer;
}
</style>