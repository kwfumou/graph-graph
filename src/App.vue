<template>
  <div id="app">
    <myheader></myheader>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Table />
    <router-view />
    <button class="btn btn-primary">bootstrap</button>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import myheader from "./components/myheader";

export default {
  name: "App",
  components: {
    Table,
    myheader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
