<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <k-button @click="hideCode" v-if="codeVisible">隐藏代码</k-button>
      <k-button @click="showCode" v-else>查看代码</k-button>
    </div>
    <div class="demo-code">
      <pre class="language-code" v-show="codeVisible" v-html="html" />
    </div>
  </div>
</template>
<script lang='ts'>
import kButton from "../lib/kButton.vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = window.Prism;
import { computed, ref } from "vue";
export default {
  components: {
    kButton,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    return { codeVisible, Prism, html, showCode, hideCode };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: #282828;
    }
  }
}
</style>