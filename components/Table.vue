<template>
  <table>
    <thead>
      <tr>
        <th @click="sort">
          id <span v-if="ascendingSort">↑</span><span v-else>↓</span>
        </th>
        <th>name</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="comment in sortedArray"
        :key="comment.id"
        @click="openComment(comment.id)"
      >
        <td class="id">{{ comment.id }}</td>
        <td>{{ comment.name }}</td>
        <td>
          <a>{{ comment.email }}</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "NuxtTable",
  data() {
    return { ascendingSort: true };
  },
  props: {
    comments: {
      type: Array,
      default: [],
    },
  },
  computed: {
    sortedArray() {
      return this.comments.sort((a, b) => {
        return this.ascendingSort ? a.id - b.id : b.id - a.id;
      });
    },
  },
  methods: {
    openComment(commentId) {
      this.$router.push({ path: `/comments/${commentId}` });
    },
    sort() {
      this.ascendingSort = !this.ascendingSort;
    },
  },
};
</script>

<style scoped>
table {
  max-width: 720px;
  border-spacing: 0;
  word-break: break-all;
}

th,
td {
  background: #0000000d;
  border: 1px solid white;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 10px;
}
td:first-child {
  text-align: center;
}
tr:first-child th:first-child {
  border-top-left-radius: 10px;
}
tr:first-child th:last-child {
  border-top-right-radius: 10px;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

tbody tr {
  cursor: pointer;
}
th:first-child {
  white-space: nowrap;
}
th:first-child:hover {
  cursor: pointer;
}

td a {
  text-decoration: none;
  color: #2975cc;
}
</style>
    