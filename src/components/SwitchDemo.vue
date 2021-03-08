<template>
  <div>
    <k-switch v-model:value="bool" />
  </div>
</template>

<script lang='ts'>
import kSwitch from "../lib/kSwitch.vue";
import { ref } from "vue";
export default {
  components: {
    kSwitch,
  },
  setup() {
    const bool = ref(true);
    return { bool };
  },
};
</script>

<style>
</style>