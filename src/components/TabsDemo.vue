<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <k-tabs>
    <k-tab title="导航1">内容1</k-tab>
    <k-tab title="导航2">内容2</k-tab>
  </k-tabs>
</template>

<script lang='ts'>
import kTabs from "../lib/kTabs.vue";
import kTab from "../lib/kTab.vue";
export default {
  components: {
    kTabs,
    kTab,
  },
};
</script>

<style>
</style>