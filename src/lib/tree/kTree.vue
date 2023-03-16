<template>
  <div class="k-tree">
    <k-tree-item :data="innerOptions"> </k-tree-item>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    data: { type: Array },
  },
  setup(props) {
    const handleOptions = (item, indent = 0) => {
      return {
        ...item,
        disabled: false,
        expand: false,
        checked: false,
        indent,
        children: (item.children || []).map((item) =>
          handleOptions(item, indent + 1)
        ),
      };
    };
    const innerOptions = ref(props.data.map((item) => handleOptions(item)));

    return { innerOptions };
  },
  created() {},
};
</script>

<style lang="scss">
// .k-tree {
//   ul {
//     li {
//       padding-top: 10px;
//       cursor: pointer;
//       span {
//         width: 40%;
//         display: inline-block;
//         &:hover {
//           background-color: #d9ecf8;
//           color: #fff;
//         }
//       }
//     }
//   }
// }
</style>
