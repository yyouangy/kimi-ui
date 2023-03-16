<template>
  <div class="k-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="k-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
<script lang="ts">
import "../assets/icon/font/iconfont.js";
import { computed } from "vue";
export default {
  props: {
    name: {
      type: String,
    },
    dot: {
      type: Boolean,
    },
    badge: {
      type: String,
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#${props.name}`;
    });
    const styleDot = computed(() => {
      return {
        [`k-dot`]: props.dot && !props.badge,
      };
    });
    const badge = computed(() => {
      return props.badge;
    });
    return {
      iconName,
      styleDot,
      badge,
    };
  },
};
</script>

<style lang="scss">
.k-icon {
  display: inline-block;
  position: relative;
  font-size: 32px;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .k-info {
    position: absolute;
    top: 8px;
    right: 0;
    box-sizing: border-box;
    min-width: 26px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 16px;
    background-color: #ee0a24;
    transform: translate(50%, -50%);
  }
  .k-dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #ee0a24;
    border-radius: 100%;
  }
}
</style>
