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
    const active = ref(false);
    const showDialog = () => {
      active.value = true;
    };
    const showDialogDirectly = () => {
      openDialog({
        title: "标题",
        content: "内容",
        onConfirm: () => {
          return true;
        },
        onCancel: () => {
          return false;
        },
      });
    };
    return { active, showDialog, showDialogDirectly };
  },
};
</script>
