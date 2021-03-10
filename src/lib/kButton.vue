<template>
  <button :class="classes" class="k-button" v-bind="$attrs">
    <span v-if="loading" class="k-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return { [`k-theme-${theme}`]: theme, [`k-size-${size}`]: size };
    });
    return { classes };
  },
};
</script>

<style lang='scss'>
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.k-button {
  font-size: 14px;
  box-sizing: border-box;
  height: $h;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  //按钮theme
  &.k-theme-primary {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: #084696;
    &:hover,
    &:focus {
      // color: lighten($blue, 5%);
      background-color: lighten(#084696, 5%);
    }
  }
  &.k-theme-success {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: rgb(43, 131, 21);
    &:hover,
    &:focus {
      background-color: lighten(rgb(43, 131, 21), 5%);
    }
  }
  &.k-theme-warning {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: rgb(162, 175, 39);
    &:hover,
    &:focus {
      background-color: lighten(rgb(162, 175, 39), 5%);
    }
  }
  &.k-theme-danger {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: rgb(131, 56, 21);

    &:hover,
    &:focus {
      background-color: lighten(rgb(131, 56, 21), 5%);
    }
  }

  //按钮size
  &.k-size-big {
    height: $h + 6px;
    font-size: 18px;
  }
  &.k-size-small {
    height: $h - 6px;
    font-size: 12px;
  }
  > .k-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: rgb(15, 19, 20) rgb(15, 19, 20) rgb(15, 19, 20) transparent;
    border-style: dotted;
    border-width: 2px;
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
// .k-size-big{
//   height: $h + 6px;
//   font-size: 18px;
// }
// .k-size-small{
//   height: $h - 6px;
//   font-size: 14px;
// }
</style>