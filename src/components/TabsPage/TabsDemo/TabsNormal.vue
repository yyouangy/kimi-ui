<demo>
常规用法
</demo>
<template>
  <k-tabs v-model:selected="initSelected">
    <k-tab title="学习">学习</k-tab>
    <k-tab title="生态系统">生态系统</k-tab>
    <k-tab title="团队">团队</k-tab>
    <k-tab title="资源列表">资源列表</k-tab>
  </k-tabs>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const initSelected = ref("学习");
    return { initSelected };
  },
};
</script>
