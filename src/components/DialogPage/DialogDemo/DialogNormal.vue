<demo>
常规用法
</demo>
<template>
  <k-button @click="showDialog">打开Dialog</k-button>
  <k-dialog
    v-model:active="active"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    <template #title>
      <strong>Tips</strong>
    </template>
    <template #content>
      <strong>First Content</strong>
      <div>Second Content</div>
    </template>
  </k-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(false);
    const showDialog = () => {
      active.value = true;
    };
    const handleConfirm = () => {
      alert("confirm");
    };
    const handleCancel = () => {
      alert("cancel");
    };
    return { active, showDialog, handleConfirm, handleCancel };
  },
};
</script>
