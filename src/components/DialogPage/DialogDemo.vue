<template>
  <div>
    <h1>Dialog 组件示例</h1>
      <Demo :component="DialogNormal" />
      <Demo :component="DialogOpen" />
      
  </div>
</template>

<script lang='ts'>
import DialogNormal from "./DialogDemo/DialogNormal.vue";
import DialogOpen from "./DialogDemo/DialogOpen.vue";
import { ref } from "vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      DialogNormal,
      DialogOpen,
    };
  },
};
</script>

<style>
</style>