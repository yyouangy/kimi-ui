<demo>
常规用法
</demo>
<template>
  <k-button @click="showDialog">打开Dialog</k-button>
  <k-dialog v-model:visible="visibleDialog" :closeByClickMask="true" :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>这是第1条内容</strong>
      <div>这是第2条内容</div>
    </template>
  </k-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const visibleDialog = ref(false);
    const showDialog = () => {
      visibleDialog.value = true;
    };
    const fn1 = () => {
      return true;
    };
    const fn2 = () => {
      return false;
    };
    return { visibleDialog, showDialog, fn1, fn2 };
  },
};
</script>
