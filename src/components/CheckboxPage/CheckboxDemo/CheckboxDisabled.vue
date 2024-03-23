<demo>
    禁用
    </demo>
<template>
  <k-check-box v-model:checked="checked" disabled> Checkbox </k-check-box>
  <br />
  <p style="margin-top: 10px">checked: {{ checked }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(true);
</script>
