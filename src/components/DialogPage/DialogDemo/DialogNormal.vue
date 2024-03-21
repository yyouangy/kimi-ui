<demo>
常规用法
</demo>
<template>
  <k-button @click="showDialog">打开Dialog</k-button>
  <k-dialog
    v-model:visible="visibleDialog"
    :closeByClickMask="true"
    :confirm="fn1"
    :cancel="fn2"
  >
    <template #title>
      <strong>标题</strong>
    </template>
    <template #content>
      <strong>这是第1条内容</strong>
      <div>这是第2条内容</div>
    </template>
  </k-dialog>
</template>

<script>
import { ref } from "vue";
import kButton from "../../../lib/kButton.vue";

interface DialogConfig{
  handleConfirm:()=>Promise<any>,
    handleCancel:()=>Promise<any>

}

export default {
  setup() {
    const visibleDialog = ref(false);
    const showDialog = () => {
      visibleDialog.value = true;
    };
    const fn1 = () => {
      return new Promise((res) => {
        setTimeout(() => {}, 2000);
      }).then((ress) => {});
    };
    const fn2 = () => {
      // return false;
      return new Promise((res) => {
        setTimeout(() => {}, 2000);
      }).then((ress) => {});
    };
    return { visibleDialog, showDialog, fn1, fn2 };
  },
};
</script>
