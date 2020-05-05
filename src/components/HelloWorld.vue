<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Table />
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Table
  }
};
</script>
