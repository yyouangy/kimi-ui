<template>
  <div>
    <h1>Checkbox 组件示例</h1>
    <Demo :component="CheckboxSingle" />
    <Demo :component="CheckboxDisabled" />
    <Demo :component="CheckboxGroup" />
    <Demo :component="CheckboxOptions" />
  </div>
</template>

<script>
import CheckboxSingle from "./CheckboxDemo/CheckboxSingle.vue";
import CheckboxDisabled from "./CheckboxDemo/CheckboxDisabled.vue";
import CheckboxGroup from "./CheckboxDemo/CheckboxGroup.vue";
import CheckboxOptions from "./CheckboxDemo/CheckboxOptions.vue";

import Demo from "../Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { CheckboxSingle, CheckboxDisabled, CheckboxGroup, CheckboxOptions };
  },
};
</script>

<style></style>
