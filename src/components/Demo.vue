<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions" @mouseenter="enter" @mouseleave="leave">
      <div class="demo-code">
        <div class="demo-code-content" :style="{ height: height + 'px' }">
          <pre class="languagehtml" v-html="html" ref="codeBlock"></pre>
        </div>
        <div class="demo-code-control" @click="showCode">
          <svg>
            <use :xlink:href="
                codeVisible === true
                  ? '#icon-xiangshangjiantou'
                  : '#icon-xiangxiajiantou'
              "></use>
          </svg>
          <transition name="fade">
            <span class="demo-code-show" v-show="show">{{
              codeVisible === true ? "隐藏代码" : "显示代码"
            }}</span>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import kButton from "../lib/kButton.vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/themes/prism-solarizedlight.css";
import { computed, ref, onMounted, nextTick } from "vue";
export default {
  components: {
    kButton,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const codeBlock = ref(null);
    nextTick(() => {});
    const show = ref(false);
    const height = ref(0);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const enter = () => {
      show.value = true;
    };
    const leave = () => {
      show.value = false;
    };
    const showCode = () => {
      if (height.value === 0) {
        height.value = codeBlock.value.offsetHeight;
      } else {
        height.value = 0;
      }
    };
    const codeVisible = computed(() => {
      return height.value !== 0;
    });
    return {
      codeVisible,
      Prism,
      html,
      showCode,
      height,
      codeBlock,
      enter,
      leave,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  width: 80%;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    border-top: 1px solid $border-color;
  }

  &-code {
    &-content {
      transition: height 0.25s;
      height: 0;
      overflow-y: hidden;
      overflow-x: auto;
      > pre {
        padding: 10px 16px;
        line-height: 1.3;
        font-family: Consolas, "Courier New", Courier, monospace;
        margin: 0;
        :deep(.token) {
          background-color: inherit;
        }
      }
    }

    &-control {
      cursor: pointer;
      text-align: center;
      height: 44px;
      line-height: 44px;
      position: relative;
      &:hover {
        background-color: var(--aside-bg-color);
        svg {
          transform: translateX(-35px);
        }
      }

      svg {
        fill: currentcolor;
        width: 14px;
        height: 14px;
        transition: all 0.3s;
      }

      .demo-code-show {
        position: absolute;
        font-size: 14px;
        line-height: 44px;
        transition: all 0.3s;
        transform: translateX(-30px);

        &.fade-enter {
          opacity: 0;
          transform: translateX(10px);
        }

        &.fade-enter-to {
          opacity: 1;
          transform: translateX(-30px);
        }

        &.fade-leave {
          opacity: 1;
          transform: translateX(-30px);
        }

        &.fade-leave-to {
          opacity: 0;
          transform: translateX(0px);
        }
      }
    }
  }
}
</style>
