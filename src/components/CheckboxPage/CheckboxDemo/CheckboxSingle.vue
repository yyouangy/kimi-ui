<demo>
    单选框功能
    </demo>
<template>
  <k-check-box v-model:checked="checked"> Checkbox </k-check-box>
  <br />
  <p style="margin-top: 10px">checked: {{ checked }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
