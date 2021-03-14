<demo>
支持disabled
</demo>
<template>
  <k-switch v-model:value="bool" disabled/>
</template>

<script lang="ts">
import kSwitch from "../../../lib/kSwitch.vue";
import { ref } from "vue";
export default {
  components: {
    kSwitch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>