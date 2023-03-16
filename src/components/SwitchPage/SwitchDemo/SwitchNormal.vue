<demo>
常规用法
</demo>
<template>
  <k-switch v-model:value="opened" />
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const opened = ref(true);
    return {
      opened,
    };
  },
};
</script>