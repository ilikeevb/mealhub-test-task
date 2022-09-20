<template>
  <div v-if="pages > 6" class="buttons-list">
    <button @click="previousPage">
      <img src="~/assets/left.svg" />
    </button>
    <button :class="{ 'active-button': activePage === 1 }" @click="openPage(1)">
      1
    </button>
    <button v-show="activePage > 5" class="disable-button">
      <img src="~/assets/dots.svg" />
    </button>
    <button
      v-for="page in viewPages"
      :key="page"
      @click="openPage(page)"
      :class="{ 'active-button': activePage === page }"
    >
      {{ page }}
    </button>
    <button v-show="activePage < pages - 4" class="disable-button">
      <img src="~/assets/dots.svg" />
    </button>
    <button
      @click="openPage(pages)"
      :class="{ 'active-button': activePage === pages }"
    >
      {{ pages }}
    </button>
    <button @click="nextPage">
      <img src="~/assets/right.svg" />
    </button>
  </div>
  <div v-else class="buttons-list">
    <button
      v-for="page in pages"
      :key="page"
      @click="openPage(page)"
      :class="{ active: activePage === page }"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  name: "NuxtPagination",
  computed: {
    activePage() {
      return this.$store.getters.GET_ACTIVE_PAGE;
    },
    pages() {
      return this.$store.getters.GET_PAGES;
    },
    viewPages() {
      // Создает массив номеров страниц пагинации
      let pages = [];
      if (this.activePage <= 5) {
        for (let i = 2; i <= 5; i++) pages.push(i);
      } else if (this.activePage < this.pages - 4) {
        pages = [this.activePage - 1, this.activePage, this.activePage + 1];
      } else {
        for (let i = this.pages - 4; i < this.pages; i++) pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    openPage(page) {
      this.$store.commit("OPEN_PAGE", page);
    },
    previousPage() {
      if (this.activePage > 1) this.openPage(this.activePage - 1);
    },
    nextPage() {
      if (this.activePage < this.pages) this.openPage(this.activePage + 1);
    },
  },
};
</script>

<style scoped>
.buttons-list {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}
button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: #0000000d;
}
button:hover {
  background: #0000001f;
}
.active-button {
  background: #0000004d;
}
.disable-button:hover {
  cursor: default;
  background: #0000000d;
}
</style>