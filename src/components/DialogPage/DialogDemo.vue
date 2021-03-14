<template>
  <div>
    <h1>Dialog 组件示例</h1>
    <div class="demo">
      <Demo :component="DialogNormal" />
      <Demo :component="DialogOpen" />
    </div>
  </div>
</template>

<script lang='ts'>
import kButton from "../../lib/kButton.vue";
import DialogNormal from "./DialogDemo/DialogNormal.vue";
import DialogOpen from "./DialogDemo/DialogOpen.vue";
import { ref } from "vue";
import Demo from "../Demo.vue";
export default {
  components: {
    kButton,
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