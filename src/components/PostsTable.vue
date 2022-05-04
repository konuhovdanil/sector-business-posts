<template>
  <div class="posts-table-container">
    <div class="posts-table-container__head_row">
      <div class="posts-table-container__head_row_cell" @click="setActiveClass" ref="idCell" data-column="id">
        ID
        <img src="@/assets/arrow-down.svg" class="posts-table-container__head_row_cell__arrow" alt="arrow">
      </div>
      <div class="posts-table-container__head_row_cell" @click="setActiveClass" ref="titleCell" data-column="title">
        Заголовок
        <img src="@/assets/arrow-down.svg" class="posts-table-container__head_row_cell__arrow" alt="arrow">
      </div>
      <div class="posts-table-container__head_row_cell" @click="setActiveClass" ref="bodyCell" data-column="body">
        Описание
        <img src="@/assets/arrow-down.svg" class="posts-table-container__head_row_cell__arrow" alt="arrow">
      </div>
    </div>
    <div class="posts-table-container__body_row" v-for="post in filteredPosts" :key="post.id">
      <div class="posts-table-container__body_row_cell" >{{ post.id }}</div>
      <div class="posts-table-container__body_row_cell" >{{ post.title }}</div>
      <div class="posts-table-container__body_row_cell" >{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsTableComponent",
  props: {
    filteredPosts: Array
  },
  methods: {
    setActiveClass(e) {
      const cells = [this.$refs.idCell, this.$refs.titleCell, this.$refs.bodyCell];
      const column = e.currentTarget.dataset.column;
      let direction = 1;

      if (e.currentTarget.classList.contains('active')) {
        cells.forEach(cell => cell.classList.remove('active'));
      } else {
        cells.forEach(cell => cell.classList.remove('active'));
        e.currentTarget.classList.add('active');
        direction = -1
      }

      this.$emit('get-sort-type', {
        direction,
        column
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .posts-table-container {
    width: 100%;
    margin-bottom: 16px;

    &__head_row {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 110px 529px 1fr;

      &_cell {
        min-height: 54px;
        background: #474955;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        &.active {
          .posts-table-container__head_row_cell__arrow {
            transform: rotate(180deg);
          }
        }

        &__arrow {
          margin-left: 30px;
        }
      }
    }

    &__body_row {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 110px 529px 1fr;

      &_cell {
        min-height: 56px;
        border-bottom: 1px solid #E3E6EC;
        border-left: 1px solid #E3E6EC;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 8px;

        &:nth-child(3n + 4) {
          border-right: 1px solid #E3E6EC;
          justify-content: center;
        }

        &:nth-child(3n) {
          border-right: 1px solid #E3E6EC;
        }
      }
    }
  }
</style>