<template>
  <div id="app">
    <Header />
    <div class="main-body">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}

.main-body {
  margin: auto;
  margin-top: 40px;
  width: 1100px;
}
</style>