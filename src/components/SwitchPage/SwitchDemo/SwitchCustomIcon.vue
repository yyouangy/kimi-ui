<demo>
    自定义图标
    </demo>
<template>
  <k-switch v-model:value="opened">
    <template #openIcon>
      <k-icon name="icon-sun"></k-icon>
    </template>
    <template #closeIcon>
      <k-icon name="icon-moon"></k-icon>
    </template>
  </k-switch>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const opened = ref(false);
    return {
      opened,
    };
  },
};
</script>
