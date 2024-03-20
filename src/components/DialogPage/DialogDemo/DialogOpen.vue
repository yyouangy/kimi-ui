<demo>
一键打开Dialog
</demo>
<template>
  <k-button @click="showDialogDirectly">一键打开Dialog</k-button>
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
    const showDialogDirectly = () => {
      openDialog({
        title: "标题",
        content: "内容",
        ok: () => { return true },
        cancel: () => { return false },
      });
    };
    return { visibleDialog, showDialog, showDialogDirectly };
  },
};
</script>
