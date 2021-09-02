<template>
  <div></div>
  <h1>Tabs 组件示例</h1>
  <Demo :component="TabsNormal" />
  <!-- <k-tabs v-model:selected="initSelected">
    <k-tab title="学习">学习</k-tab>
    <k-tab title="生态系统">生态系统</k-tab>
    <k-tab title="团队">团队</k-tab>
    <k-tab title="资源列表">资源列表</k-tab>
  </k-tabs> -->
</template>

<script lang='ts'>
import TabsNormal from "./TabsDemo/TabsNormal.vue";
import Demo from "../Demo.vue";
import { ref } from "vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { TabsNormal };
  },
};
</script>

<style>
</style>