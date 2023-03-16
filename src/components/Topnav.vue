<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg>
        <use xlink:href="#icon-16gl-K"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <k-switch v-model:value="opened" @click="switchMode">
          <template v-slot:openIcon>
            <k-icon name="icon-moon"></k-icon>
          </template>
          <template v-slot:closeIcon>
            <k-icon name="icon-sun"></k-icon>
          </template>
        </k-switch>
      </li>
      <li>
        <a href="https://github.com/yyouangy/kimi-ui">
          <svg>
            <use xlink:href="#icon-GitHub"></use>
          </svg></a>
      </li>
    </ul>
    <svg v-if="toggleButtonVisible" class="category" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import { inject, Ref, ref } from "vue";
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
      asideVisible.value = !asideVisible.value;
    };
    const switchMode = () => {
      const isDark = document.body.classList.contains("dark");
      if (isDark) {
        document.body.classList.remove("dark");
        localStorage.removeItem("dark");
      } else {
        document.body.classList.add("dark");
        localStorage.setItem("dark", "1");
      }
    };
    const opened = ref(false);
    return { toggleAside, opened, switchMode };
  },
};
</script>

<style lang='scss' scoped>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: #05538c;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  z-index: 20;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);

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
    align-items: center;
    > li {
      margin: 0 1em;

      > a {
        > svg {
          height: 25px;
          width: 25px;
          cursor: pointer;
        }
      }
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