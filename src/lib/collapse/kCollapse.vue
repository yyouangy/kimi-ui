<template>
  <div class="k-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { watch, onMounted, ref, computed } from "vue";
import kButton from "../kButton.vue";

export default {
  props: {
    modelValue: {
      type: [Array, String],
    },
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    kButton,
  },
  setup(props, context) {
    const currentValue = props.modelValue;
    //获取当前展开的item数组，初始化折叠面板
    const getActiveKey = () => {
      let activeKey = currentValue || [];
      const accordion = props.accordion;
      if (!accordion && !Array.isArray(activeKey)) {
        throw new Error(
          `When there is no accordion property or its value is false, activeName wants to be an array`
        );
      }
      //如果是手风琴模式，且activeKey>1
      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]];
      }
      //不是手风琴模式，遍历activeKey,确保每一项是string类型
      // for (let i = 0; i < activeKey.length; i++) {
      //   activeKey[i] = activeKey[i].toString();
      // }
      return activeKey;
    };
    const toggle = (data) => {};
    const setActive = () => {
      const activeKey = getActiveKey();
      console.log(activeKey);

      // const defaults = context.slots.default();
      // defaults.forEach((child, index) => {
      //   const name = child.props.name || index;
      //   child.isActive = activeKey.includes(name);
      // });
      // console.log(defaults);
    };
    onMounted(() => {
      setActive();
    });
    return { currentValue, setActive, getActiveKey, toggle };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

// .k-collapse{

// }
</style>
