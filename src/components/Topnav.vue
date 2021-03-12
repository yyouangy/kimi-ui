<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg>
        <use xlink:href="#icon-ziyuan"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <!-- <img
      v-if="toggleBut tonVisible"
      @click="toggleAside"
      src="../assets/category.png"
      class="category"
      alt=""
    /> -->
    <svg v-if="toggleButtonVisible" class="category" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  props: {
    toggleButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
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
    top: 20px;
    width: 36px;
    height: 36px;
    display: none;
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