<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <Demo :component="SwitchNormal" />
      <Demo :component="SwitchDisabled" />
    </div>
  </div>
</template>

<script lang='ts'>
import SwitchNormal from "./SwitchDemo/SwitchNormal.vue";
import SwitchDisabled from "./SwitchDemo/SwitchDisabled.vue";
import Demo from "../Demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return { SwitchNormal, SwitchDisabled };
  },
};
</script>

<style lang='scss' scoped>
</style>