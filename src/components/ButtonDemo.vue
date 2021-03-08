<template>
  <h1>示例1</h1>
  <k-button >默认按钮</k-button>
  <k-button theme="primary">主要按钮</k-button>
  <k-button theme="success">成功按钮</k-button>
  <k-button theme="warning">警告按钮</k-button>
  <k-button theme="danger">危险按钮</k-button>
  <h1>示例2</h1>
  <k-button size="big">大大大</k-button>
  <k-button size="normal">中中中</k-button>
  <k-button size="small">小小小</k-button>
  <h1>示例3</h1>
  <k-button loading>加载中</k-button>
</template>

<script>
import kButton from "../lib/kButton.vue";
export default {
  components: {
    kButton,
  },
  setup() {
    const onClick = () => {
      console.log("袁国耀");
    };
    return { onClick};
  },
};
</script>

<style>
</style>