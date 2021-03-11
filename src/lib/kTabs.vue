<template>
    kTabs组件

  <div class="kTabs">
    <div>
    <div v-for="(t,index) in titles" :key="index" class='title'>{{ t }}</div>

    </div>
    <div>
    <component v-for="(c,index) in defaults" :key="index" :is="c" class="content"></component>

    </div>
  </div>
</template>

<script lang='ts'>
import kTab from "./kTab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== kTab) {
        throw new Error("kTabs组件的子组件必须是kTab"); //防御性编程
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles };
  },
};
</script>

<style lang='scss'>
.kTabs{
  display:flex;
}
</style>