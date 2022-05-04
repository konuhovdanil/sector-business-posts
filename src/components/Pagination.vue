<template>
  <div class="pagination-container">
    <button class="pagination-container__prev_btn pagination-btn" @click="updatePage(currentPage - 1)">Назад</button>
    <div class="pagination-container__pages_container">
      <button
        class="pagination-container__pages_container_page pagination-btn"
        :class="{ 'active': currentPage === count }"
        v-for="count in pagesCount"
        :key="count"
        @click="updatePage(count)">
        {{ count }}
      </button>
    </div>
    <button class="pagination-container__next_btn pagination-btn" @click="updatePage(currentPage + 1)">Далее</button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    pagesCount: Number,
    currentPage: Number,
  },
  methods: {
    updatePage(page) {
      this.$emit('update-page', page);
    }
  }
}
</script>

<style scoped lang="scss">
  .pagination-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & .pagination-btn {
      border: none;
      background: none;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #474955;
    }

    &__pages_container {
      display: flex;
      gap: 14px;

      .pagination-btn {
        font-style: italic;
        font-weight: 700;
        font-size: 18px;

        &.active {
          color: #7EBC3C;
        }
      }
    }
  }
</style>