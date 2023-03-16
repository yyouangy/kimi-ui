<demo>
    常规用法
    </demo>
<template>
  <k-tree :data="treeData"> </k-tree>
</template>

<script lang="ts">
interface Tree {
  label: string;
  children?: Tree[];
}

export default {
  setup() {
    const treeData: Tree[] = [
      {
        label: "dist",
        children: [
          {
            label: "index.html",
          },
          {
            label: "favicon.ico",
          },
        ],
      },
      {
        label: "src",
        children: [
          {
            label: "components",
            children: [
              {
                label: "Tree.vue",
                children: [
                  {
                    label: "Tree.vue",
                  },
                ],
              },
            ],
          },
          {
            label: "App.vue",
          },
        ],
      },
    ];
    return { treeData };
  },
};
</script>
