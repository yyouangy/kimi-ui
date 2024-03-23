<demo>
    options生成复选框组
    </demo>
<template>
  <k-check-box-group v-model:value="values" control :options="items" vertical>
  </k-check-box-group>
  <br />
  values: {{ values }}
</template>

<script setup lang="ts">
import { ref } from "vue";
const values = ref([]);
const items = ["北京", "上海", "广州", "深圳"];
</script>
