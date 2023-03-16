<template>
  <div>
    <h1>Collapse 组件示例</h1>
      <Demo :component="CollapseNormal" />
      <!-- <Demo :component="DialogOpen" /> -->
  </div>
</template>

<script lang='ts'>
import CollapseNormal from "./CollapseDemo/CollapseNormal.vue";
import { ref } from "vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      CollapseNormal,
    };
  },
};
</script>

<style>
</style>