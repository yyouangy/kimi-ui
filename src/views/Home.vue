<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Kimi-UI</h1>
      <h2>一个厉害的UI框架</h2>
      <a href="">Gitee</a>
      <a href="">开始</a>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
</style>