<template>
  <div>
    <h1>Icon 组件示例</h1>
    <Demo :component="IconNormal" />
  </div>
</template>

<script lang="ts">
import IconNormal from "./IconDemo/IconNormal.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { IconNormal };
  },
};
</script>

<style></style>
