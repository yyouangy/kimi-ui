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

        <h3>Basic 基础组件</h3>
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
        </ol>

        <h3>Form 表单组件</h3>
        <ol>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tree">Tree 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox 组件</router-link>
          </li>
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
  height: 100%;
  background-color: var(--doc-bg-color);
  color: var(--font-color);

  .nav {
    background-color: var(--navbar-color);
  }

  > .content {
    flex-grow: 1;
    margin-top: 65px;
    padding-left: 236px;
    z-index: 1;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  padding-top: 30px;
  height:100%; 

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 0 25px;
  }
}

aside {
  position: fixed;
  z-index: 11111;
  top: 65px;
  left: 0;
  width: 235px;
  height:90%; 
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  > h3 {
    font-weight: 800;
    padding: 10px 30px 20px;
  }

  > ol {
    > li {
      padding: 0 0 10px 0;

      > a {
        position: relative;
        height: 6vh;
        display: block;
        padding: 0 50px;
        line-height: 6vh;

        &:hover,
        &:focus {
          background-color: var(--aside-bg-color);
        }
      }

      .router-link-active {
        background-color: var(--aside-bg-color);

        &::after {
          content: "";
          display: block;
          animation: 0.8s bdrolate;
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 6vh;
          background-color: var(--aside-color);
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
.side-animation {
  opacity: 1;
  visibility: 1;
  width: 80%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
