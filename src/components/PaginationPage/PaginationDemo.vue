<template>
  <div>
    <h1>Pagination 组件示例</h1>
    <Demo :component="PaginationNormal" />
  </div>
</template>

<script>
import PaginationNormal from "./PaginationDemo/PaginationNormal.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { PaginationNormal };
  },
};
</script>

<style>
</style>