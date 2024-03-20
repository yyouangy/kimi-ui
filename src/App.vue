<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup(propss, { attrs }) {
    console.log(propss, attrs);
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible); //set
    //页面切换时，检查视口是否<500px,如果是，隐藏侧边栏
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
<style lang="scss" scoped></style>
