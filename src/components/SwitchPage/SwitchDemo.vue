<template>
  <div>
    <h1>Switch 开关</h1>
    <Demo :component="SwitchNormal" />
    <Demo :component="SwitchDisabled" />
    <Demo :component="SwitchCustomIcon" />
  </div>
</template>

<script lang="ts">
import SwitchNormal from "./SwitchDemo/SwitchNormal.vue";
import SwitchDisabled from "./SwitchDemo/SwitchDisabled.vue";
import SwitchCustomIcon from "./SwitchDemo/SwitchCustomIcon.vue";
import Demo from "../Demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return { SwitchNormal, SwitchDisabled, SwitchCustomIcon };
  },
};
</script>

<style lang="scss" scoped></style>
