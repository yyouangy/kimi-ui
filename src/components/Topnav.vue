<template>
  <div class="topnav">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <img
      @click="toggleAside"
      src="../assets/category.png"
      class="category"
      alt=""
    />
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const toggleAside = () => {
      console.log(asideVisible);
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang='scss' scoped>
.topnav {
  background-color: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    img {
      height: 40px;
      width: 50px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .category {
    position: absolute;
    left: 16px;
    top: 16px;
    // img {
    width: 45px;
    height: 45px;
    display: none;
    // }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    .category {
      display: block;
    }
  }
}
</style>