<template>
  <div>dialog示例</div>
  <h1>示例1</h1>
  <k-button @click="showDialog">打开Dialog</k-button>
  <k-dialog
    v-model:visible="visibleDialog"
    :closeByClickMask="false"
    :ok="f1"
    :cancel="f2"
  />
</template>

<script lang='ts'>
import kDialog from "../lib/kDialog.vue";
import kButton from "../lib/kButton.vue";
import { ref } from "vue";
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
    return { visibleDialog, showDialog, f1, f2 };
  },
};
</script>

<style>
</style>