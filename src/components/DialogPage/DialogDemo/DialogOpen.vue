<demo>
一句话打开Dialog
</demo>
<template>
  <k-button @click="showDialogDirectly">一句话打开Dialog</k-button>
  <k-dialog></k-dialog>
</template>

<script>
import { openDialog } from "../../../lib/openDialog";
import { ref } from "vue";
export default {
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
        ok: () => {},
        cancel: () => {},
      });
    };
    return { visibleDialog, showDialog, f1, f2, showDialogDirectly };
  },
};
</script>
