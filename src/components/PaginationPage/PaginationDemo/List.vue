
<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    dataSource: {
      type: Array,
    },
  },
  setup(props) {
    const list = props.dataSource;
    watch(
      () => props.dataSource,
      (newValue, oldValue) => {
        console.log("sum变了", newValue, oldValue);
      },
      { immediate: true }
    );
    return { list };
  },
};
</script>
