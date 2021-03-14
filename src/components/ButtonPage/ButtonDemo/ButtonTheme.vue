<demo>
主题
</demo>
<template>
  <k-button>默认按钮</k-button>
  <k-button theme="primary">主要按钮</k-button>
  <k-button theme="success">成功按钮</k-button>
  <k-button theme="warning">警告按钮</k-button>
  <k-button theme="danger">危险按钮</k-button>
</template>

<script>
import kButton from "../../../lib/kButton.vue";
export default {
  components: {
    kButton,
  },
};
</script>
