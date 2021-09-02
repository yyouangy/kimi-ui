<template>
  <div>
    <h1>Button 组件示例</h1>
      <Demo :component="ButtonTheme" />
      <Demo :component="ButtonSize" />
      <Demo :component="ButtonLoading" />
  </div>
</template>

<script>
import ButtonTheme from "./ButtonDemo/ButtonTheme.vue";
import ButtonSize from "./ButtonDemo/ButtonSize.vue";
import ButtonLoading from "./ButtonDemo/ButtonLoading.vue";
import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { ButtonTheme, ButtonSize,ButtonLoading };
  },
};
</script>

<style>
</style>