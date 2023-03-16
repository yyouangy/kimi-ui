<template>
  <div class="layout">
    <Topnav toggleButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h3>文档</h3>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
        </ol>

        <ol>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
        </ol>

        <ol>
          <li>
            <router-link to="/doc/start">快速上手</router-link>
          </li>
        </ol>

        <h3>组件</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/icon">Icon 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tree">Tree 组件</router-link>
          </li>
          <!-- <li>
            <router-link to="/doc/collapse">Collapse 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/pagination">Pagination 组件</router-link>
          </li> -->
          <li>
            <router-link to="/doc/continue">未完待续...</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
    background-color: #fff;
    box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
    display: flex;
    padding: 16px;
    z-index: 10;
    color: #6f2e6a;
    justify-content: center;
    align-items: center;
  }

  >.content {
    flex-grow: 1;
    padding-top: 80px;
    padding-left: 236px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 50px 0 0 60px;
    background-color: #fff;
  }
}

aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 235px;
  height: 110vh;
  padding: 80px 0 16px;
  background: #fff;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  z-index: 1;
  transition: 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;

  >h3 {
    font-weight: 800;
    padding: 10px 30px 20px;
  }

  >ol {
    >li {
      padding: 0 0 10px 0;

      >a {
        position: relative;
        height: 40px;
        color: #555;
        display: block;
        padding: 0 50px;
        line-height: 40px;

        &:hover,
        &:focus {
          background-color: #f4faf5;
          color: #78ccac;
        }
      }

      .router-link-active {
        background-color: #f4faf5;

        &::after {
          content: "";
          display: block;
          animation: 0.8s bdrolate;
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 40px;
          background-color: #78ccac;
        }
      }
    }
  }

  @keyframes bdrolate {
    0% {
      transform: rotateX(90deg);
    }

    100% {
      transform: rotateX(0deg);
    }
  }
}

main {
  overflow: auto;
}
</style>