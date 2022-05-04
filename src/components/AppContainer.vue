<template>
  <div class="app-container">
    <header-component>
      <search-component @get-search-phrase="updateSearchPhrase"/>
    </header-component>
    <section>
      <posts-table-component :filtered-posts="filteredPostsWithSearhAndSort" :sort-type="sortType" @get-sort-type="updateSortType"/>
    </section>
    <footer-component>
      <pagination-component :pages-count="pagesCount" :current-page="currentPage" @choose-current-page="chooseCurrentPage" @update-page="chooseCurrentPage"/>
    </footer-component>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import HeaderComponent from "@/components/Header";
import SearchComponent from "@/components/Search";
import FooterComponent from "@/components/Footer";
import PaginationComponent from "@/components/Pagination";
import PostsTableComponent from "@/components/PostsTable";

export default {
  name: 'AppContainer',
  components: {
    PostsTableComponent,
    PaginationComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent
  },
  async mounted() {
    await this.fetchPosts();
    this.updateFilteredPostsWithSearhAndSort();
  },
  computed: {
    ...mapGetters({
      filteredPostsWithSearhAndSort: 'postsModule/filteredPostsWithSearhAndSort',
      pagesCount: 'postsModule/pagesCount',
      currentPage: 'postsModule/currentPage',
      sortType: 'postsModule/sortType'
    })
  },
  methods: {
    ...mapActions({
      fetchPosts: 'postsModule/fetchPosts',
      chooseCurrentPage: 'postsModule/chooseCurrentPage',
      updateFilteredPostsWithSearhAndSort: 'postsModule/updateFilteredPostsWithSearhAndSort',
      updateSearchPhrase: 'postsModule/updateSearchPhrase',
      updateSortType: 'postsModule/updateSortType'
    })
  },
}
</script>

<style scoped lang="scss">
  .app-container {
    &__overlay {
      background: rgba(0, 0, 0, .8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }
</style>