<template>
  <ul v-for="item in data" :key="item" class="k-tree-item">
    <li>

      <div style="display:flex">
        <span :style="{ paddingLeft: item.indent * 30 + 'px' }" @click.stop="item.expand = !item.expand">
          <svg v-if="item.children.length !== 0">
            <use xlink:href="#icon-jiantouyou"></use>
          </svg>
        </span> {{ item.label }}
      </div> 

      <k-tree-item :data="item.children" v-if="item.expand && item.children.length !== 0">
      </k-tree-item>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    data: { type: Array<any> },
  },

  setup() {
    const rotateArrow = computed(() => {
      //   return height.value !== 0
      //     ? "transform: rotate(135deg);"
      //     : "transform: rotate(45deg);";
    });
  },
};
</script>

<style lang="scss">
.k-tree-item {
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      background-color: rgba(1, 1, 1, 0.1);
    }
  }
  svg {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}
</style>
