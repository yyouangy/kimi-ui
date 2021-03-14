<demo>
常规用法
</demo>
<template>
  <k-switch v-model:value="bool" />
</template>

<script lang="ts">
import kSwitch from "../../../lib/kSwitch.vue";
import { ref } from "vue";
export default {
  components: {
    kSwitch,
  },
  setup() {
    const bool = ref(true);
    return {
      bool,
    };
  },
};
</script>