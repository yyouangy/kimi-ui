<demo>
    复选框组
    </demo>
<template>
  <k-check-box-group v-model:value="values">
    <k-check-box
      v-for="item in items"
      :value="item"
      :key="item"
      :label="item"
    ></k-check-box>
  </k-check-box-group>
  <br />
  values: {{ values }}
</template>

<script setup lang="ts">
import { ref } from "vue";
const values = ref([]);
const items = ["北京", "上海", "广州", "深圳"];
</script>
