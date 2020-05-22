<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  display: inline-block;
  color: #bdbdbd;
}
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
</style>
