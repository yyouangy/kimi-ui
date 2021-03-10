<template>
  <h1>dialog示例</h1>
  <h2>示例1</h2>
  <k-button @click="showDialog">打开Dialog</k-button>
  <k-dialog
    v-model:visible="visibleDialog"
    :closeByClickMask="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>
      <strong>提示</strong>
    </template>
    <template v-slot:content>
      <strong>这是第1条内容</strong>
      <div>这是第2条内容</div></template
    ></k-dialog
  >

  <h2>示例2</h2>
  <k-button @click="showDialogDirectly">一句话打开Dialog</k-button>
  <k-dialog></k-dialog>
</template>

<script lang='ts'>
import kDialog from "../lib/kDialog.vue";
import kButton from "../lib/kButton.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    kDialog,
    kButton,
  },
  setup() {
    const visibleDialog = ref(false);
    const showDialog = () => {
      visibleDialog.value = true;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {
      return false;
    };
    const showDialogDirectly = () => {
      openDialog({
        title: "提示",
        content: "内容",
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        },
      });
    };
    return { visibleDialog, showDialog, f1, f2, showDialogDirectly };
  },
};
</script>

<style>
</style>