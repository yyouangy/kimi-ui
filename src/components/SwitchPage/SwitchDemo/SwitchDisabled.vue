<demo>
支持disabled
</demo>
<template>
  <k-switch v-model:value="bool" disabled/>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>