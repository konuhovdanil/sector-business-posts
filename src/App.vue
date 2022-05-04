<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$router.push('/posts')
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  #app {
    background: #FFFFFF;
    box-shadow: 0 4px 27px rgba(230, 231, 234, 0.78);
    padding: 23px 78px 12px;
    width: 100%;
    min-height: 100vh;
  }

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
    url(./fonts/Roboto-Regular.ttf) format("truetype");
  }
</style>
