<template>
  <div></div>
  <h1>Tree 组件示例</h1>
  <Demo :component="TreeNormal" />
</template>

<script lang="ts">
import TreeNormal from "./TreeDemo/TreeNormal.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { TreeNormal };
  },
};
</script>

<style></style>
