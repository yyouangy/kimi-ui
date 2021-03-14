<demo>
常规用法
</demo>
<template>
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
</template>

<script>
import kButton from "../../../lib/kButton.vue";
import kDialog from "../../../lib/kDialog.vue";
import { ref } from "vue";
export default {
  components: {
    kButton,
    kDialog,
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
    return { visibleDialog, showDialog, f1, f2 };
  },
};
</script>
