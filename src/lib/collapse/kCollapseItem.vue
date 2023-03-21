<template>
  <div class="k-collapse-item">
    <div class="k-collapse-item-header" @click="toggle">
      <slot name="title">{{ title }}</slot>
      <span class="arrow" :style="rotateArrow"></span>
    </div>

    <div class="k-collapse-item-content" :style="{ height: height + 'px' }">
      <div class="k-collapse-item-box" ref="box">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from "vue";
export default {
  name: "kCollapseItem",
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },

  setup(props) {
    let box = ref(null);
    let height = ref(0);
    const toggle = () => {
      if (height.value === 0) {
        height.value = box.value.offsetHeight;
      } else {
        height.value = 0;
      }
    };
    const rotateArrow = computed(() => {
      return height.value !== 0
        ? "transform: rotate(135deg);"
        : "transform: rotate(45deg);";
    });
    return {
      toggle,
      height,
      rotateArrow,
      box,
    };
  },
};
</script>

<style lang="scss">
.k-collapse-item {
  &-header {
    height: 50px;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: rgb(246, 246, 246);
    cursor: pointer;
    .arrow {
      width: 8px;
      height: 8px;
      border: 1px solid #000;
      border-left-width: 0;
      border-bottom-width: 0;
      transition: 0.2s linear;
    }
  }
  &-content {
    // height: 0;
    // padding: 10px;
    transition: 0.4s linear;
    overflow: hidden;
  }
  &-box {
    padding: 10px;
  }
}
</style>
