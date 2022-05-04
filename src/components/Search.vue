<template>
  <div class="search-container">
    <input type="text" class="search-container__field" placeholder="Поиск" v-model="searchPhrase" @input="() => $emit('get-search-phrase', searchPhrase)">
    <img class="search-container__icon" src="@/assets/search-icon.svg" alt="search">
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      searchPhrase: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .search-container {
    max-width: 631px;
    height: 52px;
    position: relative;
    margin-bottom: 15px;

    &__field {
      max-width: 100%;
      width: 100%;
      height: 100%;
      background: #5A5C66;
      padding: 0 26px;

      &, &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #B3B7BF;
      }
    }

    &__icon {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>