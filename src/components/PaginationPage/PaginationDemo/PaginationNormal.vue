<demo>
常规用法
</demo>
<template>
  <List :data-source="lists" />
  <k-pagination :total="66" :defaultPageSize="10" :currentPage="1"></k-pagination>
</template>

<script>
import kPagination from "../../../lib/kPagination.vue";
import List from "./List.vue";
export default {
  components: {
    kPagination,
    List,
  },

  setup() {
    const lists = [
      { id: 1, name: "Curtis" },
      { id: 2, name: "Cutler" },
      { id: 3, name: "Cynthia" },
      { id: 4, name: "Cyril" },
      { id: 5, name: "Cyrus" },
      { id: 6, name: "Dagmar" },
      { id: 7, name: "Dahl" },
      { id: 8, name: "Dahlia" },
      { id: 9, name: "Dailey" },
      { id: 10, name: "Daine" },
    ];
    return { lists };
  },
};
</script>
