<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <Demo :component="DialogNormal" />
    <Demo :component="DialogMask" />
    <Demo :component="DialogOpen" />
    <Demo :component="DialogAsync" />
  </div>
</template>

<script lang="ts">
import DialogNormal from "./DialogDemo/DialogNormal.vue";
import DialogMask from "./DialogDemo/DialogMask.vue";
import DialogOpen from "./DialogDemo/DialogOpen.vue";
import DialogAsync from "./DialogDemo/DialogAsync.vue";
import { ref } from "vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      DialogNormal,
      DialogMask,

      DialogOpen,
      DialogAsync,
    };
  },
};
</script>

<style></style>
